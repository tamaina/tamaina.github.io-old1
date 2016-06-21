<!doctype html>
<html>
    <head>         
         <base href="http://tamaina.bikkuri.link/suiranweb/">
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">
         <link rel="stylesheet" href="./css/style.css">
         <link rel="stylesheet" href="./css/press_style.css">
         <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet">
         <!--Import Google Icon Font-->
         <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
         <!-- Compiled and minified CSS -->
     </head>
     <body>
<div class="collection">
<?php $paged = get_query_var('paged'); ?>
<?php query_posts("posts_per_page=8&paged=$paged"); ?>
<?php if (have_posts()) : while(have_posts()) : the_post(); ?>
<a href="<?php the_permalink(); ?>" class="collection-item" target="_blank"><?php the_time('Y/m/d'); ?> <?php the_title(); ?> by <?php $posttags = get_the_tags();$count = count($posttags);$loop = 0;if ($posttags) {foreach ($posttags as $tag) {$loop++;if ($count == $loop){echo $tag->name . '';} else {echo $tag->name . ', ';}}} ?> <?php the_author(); ?></a>
<?php endwhile; endif; ?>

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