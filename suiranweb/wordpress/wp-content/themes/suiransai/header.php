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
	
<base href="http://tamaina.bikkuri.link/suiranweb/">
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<?php if ( is_singular() && pings_open( get_queried_object() ) ) : ?>
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<?php endif; ?>
	<?php wp_head(); ?>
         <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
         <meta name="viewport" content="width=device-width">
         <!--Import jQuery before materialize.js-->
         <script type="text/javascript" src="./scripts/jquery-2.2.3.min.js"></script>
         <!-- Compiled and minified JavaScript -->
         <script src="./scripts/materialize/js/materialize.min.js"></script><script type="text/javascript">
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
<div class="container row">
  <h1 class="presstitle"><a href="./wordpress/" style="color:black;">Press</a><?php wp_title (); ?></h1>