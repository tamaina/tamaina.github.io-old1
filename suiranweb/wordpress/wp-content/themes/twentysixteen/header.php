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
           <title>翠巒祭プレス - <?php bloginfo('name'); ?></title>
            <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet">
              <!--Import Google Icon Font-->
            <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
              <!-- Compiled and minified CSS -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">
            <link rel="stylesheet" href="./css/style.css">
			<link rel="stylesheet" href="./css/press_style.css">
        </head>
        <body>
              <!--Import jQuery before materialize.js-->
            <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
              <!-- Compiled and minified JavaScript -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js"></script>
<div class="navbar-fixed">
  <nav class="navigationbar light-blue darken-3">
    <div class="nav-wrapper container">
      <a href="#" class="brand-logo">翠巒祭</a>
       <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="./">Top</a></li>
        <li><a href="./about/">About</a></li>
        <li><a href="./events/">Events</a></li>
        <li><a href="./goods/">Goods</a></li>
        <li><a href="./food/">Food</a></li>
        <li><a href="./access/">Access</a></li>
        <li><a href="./gallery/">Garally</a></li>
        <li><a href="./links/">Links</a></li>
        <li><a href="./game/">Game</a></li>
      </ul>
      <ul id="slide-out" class="side-nav">
        <li><a href="./">Top</a></li>
        <li><a href="./about/">About</a></li>
        <li><a href="./event/">Event</a></li>
        <li><a href="./goods/">Goods</a></li>
        <li><a href="./food/">Food</a></li>
        <li><a href="./access/">Access</a></li>
        <li><a href="./gallery/">Garally</a></li>
        <li><a href="./links/">Links</a></li>
        <li><a href="./game/">Game</a></li>
      </ul>
      <a href="javascript:void(0);" data-activates="slide-out" class="button-collapse container"><i class="fa fa-bars" aria-hidden="true"></i>
</i>
</a>
    </div>
  </nav>
</div>
<div class="container row">