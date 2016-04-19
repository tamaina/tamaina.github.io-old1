<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<?php if ( is_singular() && pings_open( get_queried_object() ) ) : ?>
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<?php endif; ?>
	<?php wp_head(); ?>

         <base href="http://localhost/suiranweb/">
         <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
         <meta name="viewport" content="width=device-width">
         <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
         <meta name="viewport" content="width=device-width">
         <!--Import jQuery before materialize.js-->
         <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
         <!-- Compiled and minified JavaScript -->
         <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js"></script>
<script type="text/javascript">
$(function(){
$("#header").load("./parts/header.html");
$("#footer").load("./parts/footer.html");
})
</script>
<?php
	while(have_posts()) {
		the_post();
		get_template_part('content');
	} ?>
</div>
<div id="header"></div>
<?php $paged = get_query_var('paged'); ?>
	<?php query_posts("cat=1&posts_per_page=10&paged=$paged"); ?>
	<?php if (have_posts()) : while(have_posts()) : the_post(); ?>
	<?php endwhile; ?>
	<?php else: ?>
	<?php endif; ?>
   </body>

<script type="text/javascript">
$(document).ready(function(){
 $('.parallax').parallax();

 $('ul.tabs').tabs();
 $('ul.tabs').tabs('select_tab', 'tab_id');
});
 $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
</script>

</html>