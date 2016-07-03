<?php get_header(); ?>
<h2><i class="fa fa-tag" aria-hidden="true"></i> タグ:<?php single_cat_title(); ?></h2>
<div class="card-panel"><?php echo tag_description(); ?></div>
<?php get_template_part('thumb'); ?>
<?php get_sidebar(); ?>
<?php get_footer(); ?>