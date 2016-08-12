<!doctype html>
<html>
    <head>
<?php
$paged = get_query_var('paged');

$src=(empty($_SERVER["HTTPS"]) ? "http://" : "https://") . $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"];
$myurl=parse_url($src);
if( isset($myurl['query']) ){
query_posts( $myurl['query'] . "&posts_per_page=20&paged=" . $paged ); 
} else {
query_posts("posts_per_page=20&paged=" . $paged); 
}

?>
         <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <title>一覧</title>
         <script type="text/javascript" src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
         <base href="<?php echo home_url(); ?>" />
         <base href="../">
         <link rel="shortcut icon" sizes="any" href="./img/TypeS-S-600-FAVICON.png" type="image/png"> 
         <link rel="shortcut icon" sizes="any" href="./img/TypeS-S-600-FAVICON.svg" type="image/svg+xml">
         <link rel="preload" as="style" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/css/materialize.min.css" />
         <link rel="preload" as="style" href="//netdna.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.css" />
         <link rel="preload" as="style" href="../lib/css/style.css" />
         <link rel="preload" as="style" href="./local.css" />
<script type="text/javascript">
$.getScript("../lib/scripts/makeparts.js", function(){
BaseFunc();
});
</script>
     </head>
     <body>
<div style="padding: 7px;">
<div class="collection z-depth-1">
<?php
 if (have_posts()) : while(have_posts()) : the_post(); ?>
<a href="<?php the_permalink(); ?>" class="collection-item" target="_blank">
<i class="fa fa-calendar-o" aria-hidden="true"></i><?php the_time('Y/m/d H:m'); ?>
  <?php the_title(); if(get_the_tags()){ ?>
 <i class="fa fa-tags" aria-hidden="true"></i><?php $posttags = get_the_tags();$count = count($posttags);$loop = 0;if ($posttags) {foreach ($posttags as $tag) {$loop++;if ($count == $loop){echo $tag->name . '';} else {echo $tag->name . ', ';}}}} if(get_the_author_meta( 'ID' )):?>
 <i class="fa fa-user" aria-hidden="true"></i><?php the_author(); ?></a>
<?php endif; endwhile; endif; ?>
</div></div>
</body>
</html>