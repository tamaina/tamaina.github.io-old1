<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<?php if ( is_singular() && pings_open( get_queried_object() ) ) : ?>
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<?php endif; ?>
	<?php wp_head(); ?>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
         <script type="text/javascript" src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">
         <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js"></script>
<base href="<?php echo get_bloginfo('home'); ?>">
<base href="../">
<script type="text/javascript">
$(function(){
$("#footer").load("./parts/footer.html");
})
</script>
         <link rel="shortcut icon" href="./img/THS-Mark.png" type="image/png"> 
         <link href="./scripts/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
         <script src="./scripts/remodal/remodal.min.js"></script>
         <link rel="stylesheet" href="./scripts/remodal/remodal.css" />
         <!-- Compiled and minified CSS -->
         <link rel="stylesheet" href="./css/style.css" />
         <link rel="stylesheet" href="./css/press_style.css" />
</head>
<body>
<?php
	while(have_posts()) {
		the_post();
		get_template_part('content');
	} ?>
</div>

<div class="navbar-fixed">
  <nav class="navigationbar light-blue darken-3">
    <div class="nav-wrapper" style="margin-left:1em;padding-right:1em;">
      <a href="./" class="brand-logo grey-text text-lighten-3 blogo">第64回翠巒祭</a>
       <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a class="grey-text text-lighten-3" href="./">トップ</a></li>
        <li><a class="grey-text text-lighten-3" href="./about/">翠巒祭について</a></li>
        <li><a class="grey-text text-lighten-3" href="./attractions/">企画・模擬店</a></li>
        <li><a class="grey-text text-lighten-3" href="./access/">アクセス</a></li>
        <li><a class="grey-text text-lighten-3" href="./qa/">Q & A</a></li>
        <li><a class="grey-text text-lighten-3" href="./garally/">ギャラリー</a></li>
        <li><a class="grey-text text-lighten-3" href="./steering_committee/">実行委員</a></li>
        <li><a class="grey-text text-lighten-3" href="./wordpress/">Press</a></li>
<!--        <li><a class="grey-text text-lighten-3" href="./game/">Game</a></li>-->
      </ul>
      <ul id="slide-out" class="side-nav">
        <li><a href="./">トップ</a></li>
        <li><a href="./about/">翠巒祭について</a></li>
        <li><a href="./attractions/">企画紹介</a></li>
        <li><a href="./access/">アクセス</a></li>
        <li><a href="./qa/">Q & A</a></li>
        <li><a href="./garally/">ギャラリー</a></li>
        <li><a href="./steering_committee/">実行委員</a></li>
        <li><a href="./wordpress/">Press</a></li>
<!--        <li><a href="./game/">Game</a></li>-->
      </ul>
      <a href="#" data-activates="slide-out" class="button-collapse container">
          <i class="fa fa-bars" aria-hidden="true" style="color: white;"></i>
</a>
    </div>
  </nav>
</div>

<div class="container row">
  <h1 class="presstitle"><a href="./wordpress/" style="color:black;">Press</a></h1>