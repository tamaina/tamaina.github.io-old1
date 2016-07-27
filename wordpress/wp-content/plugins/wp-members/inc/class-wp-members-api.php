<?php
/**
 * The WP_Members API Class.
 *
 * @package WP-Members
 * @subpackage WP_Members API Object Class
 * @since 3.1.1
 */

class WP_Members_API {

	/**
	 * Plugin initialization function.
	 *
	 * @since 3.1.1
	 */
	function __construct() {

	}
	
	/**
	 * Get field keys by meta.
	 *
	 * @since 3.1.1
	 *
	 * @return array $field_keys
	 */
	function get_field_keys_by_meta() {
		global $wpmem;
		$field_keys = array();
		foreach ( $wpmem->fields as $key => $field ) {
			$field_keys[ $field[2] ] = $key;
		}
		return $field_keys;
	}
	
	/**
	 * Get select field display values.
	 *
	 * @since 3.1.1
	 *
	 * @param  string $meta_key       The field's meta key.
	 * @return array  $display_values {
	 *     The field's display values in an array.
	 *     Elements are stored_value => display value
	 *
	 *     @type string The display value.
	 * }
	 */
	function get_select_display_values( $meta_key ) {
		global $wpmem;
		$keys = $this->get_field_keys_by_meta();
		$raw  = $wpmem->fields[ $keys[ $meta_key ] ][7];
		$delimiter = ( isset( $wpmem->fields[ $keys[ $meta_key ][8] ] ) ) ? $wpmem->fields[ $keys[ $meta_key ][8] ] : '|';
		$display_values = array();
		foreach ( $raw as $value ) {
			$pieces = explode( $delimiter, trim( $value ) );
			if ( $pieces[1] != '' ) {
				$display_values[ $pieces[1] ] = $pieces[0];
			}
		}
		return $display_values;
	}
		
	/**
	 * Checks that a given user field value is unique.
	 *
	 * @since 3.1.1
	 *
	 * @param  string $key The field being checked.
	 * @param  string $val The value to check.
	 * @return bool        True if value if is unique.
	 */
	function is_user_value_unique( $key, $val ) {
		
		$fields = array( 'ID','user_login','user_pass','user_nicename','user_email','user_url','user_registered','user_activation_key','user_status','display_name' );
		// Do we need a meta query or not?
		$is_meta = ( ! in_array( $key, $fields ) ) ? true : false;
		
		if ( $is_meta ) {
			$args = array( 'meta_query' => array( array(
				'key'     => $key,
				'value'   => $val,
				'compare' => '=',
			) ) );
		} else {
			$args = array( 'search' => $val, 'fields' => 'ID' );
		}
		
		$users = get_users( $args );
		
		// If there is data in $users, the value is not unique.
		return ( $users ) ? false : true;
	}
	
	/**
	 * Checks counter for next available number and updates the counter.
	 *
	 * @since 3.1.1
	 *
	 * @param  string $option    Option name for the counter setting.
	 * @param  int    $start     Number to start with (optional, default 0).
	 * @param  int    $increment Number to increment by (optional, default 1).
	 * @return int    $number    Next number in the series.
	 */
	function get_incremental_number( $option, $start = 0, $increment = 1 ) {
		
		// Get current number from settings
		$number = get_option( $option );
		
		// If there is no number, start with $start.
		if ( ! $number ) {
			$number = ( $start <= 0 ) ? $start : $start - $increment;
		}
		
		// Increment the number and save the setting.
		$number = $number + $increment;
		update_option( $option, $number );
		
		// Return the number.
		return $number;
	}
	
	/**
	 * Generates a unique membership number based on settings.
	 *
	 * @since 3.1.1
	 *
	 * @param  array  $args {
	 *     @type string $option
	 *     @type string $meta_key
	 *     @type int    $start     (optional, default 0)
	 *     @type int    $increment (optional, default 1)
	 *     @type int    $lead
	 * }
	 * @return string $mem_number
	 */
	function generate_membership_number( $args ) {
		$defaults = array(
			'start'     => 0,
			'increment' => 1,
			'digits'    => 8,
			'pad'       => true,
		);
		$args = wp_parse_args( $args, $defaults );
		do {
			// Generate the appropriate next number
			$number = $this->get_incremental_number( $args['option'], $args['start'], $args['increment'] );
			
			// Cast as string, not integer.
			$mem_number = (string)$number;
			
			// Add leading zeros if less than three digits.
			if ( strlen( $mem_number ) < $args['digits'] ) {
				$mem_number = ( $args['pad'] ) ? str_pad( $mem_number, $args['digits'], '0', STR_PAD_LEFT ) : $mem_number;
			}
		} while ( true !== $this->is_user_value_unique( $args['meta_key'], $mem_number ) );
		return $mem_number;
	}
	
} // End of WP_Members_Utilties class.