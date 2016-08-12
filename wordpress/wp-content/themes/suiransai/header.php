<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<?php if ( is_singular() && pings_open( get_queried_object() ) ) : ?>
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<?php endif; ?>
  <meta http-equiv="Content-Type" content="text/html">
	<?php wp_head();?>
         <script type="text/javascript" src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
<base href="<?php echo home_url(); ?>" />
         <link rel="shortcut icon" sizes="any" href="../suiranweb/img/TypeS-S-600-FAVICON.png" type="image/png"> 
         <link rel="shortcut icon" sizes="any" href="../suiranweb/img/TypeS-S-600-FAVICON.svg" type="image/svg+xml">
         <link rel="preload" as="style" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/css/materialize.min.css" />
         <link rel="preload" as="style" href="//netdna.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.css" />
         <link rel="preload" as="style" href="../lib/css/style.css" />
<script type="text/javascript">
$.getScript("../lib/scripts/makeparts.js", function(){
BaseFunc();
});
</script>
</head>
<body>
<?php
	while(have_posts()) {
		the_post();
		get_template_part('content');
	} ?>
</div>

<div class="HereIsNavBar"></div>

<div class="container row">
  <h1 class="presstitle"><a href="./" style="color:black;">Press</a></h1>