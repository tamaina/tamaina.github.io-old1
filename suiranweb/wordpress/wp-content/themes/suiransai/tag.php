<?php get_header(); ?>
<h2><i class="fa fa-tag" aria-hidden="true"></i> タグ:<?php single_cat_title(); ?></h2>
<?php echo tag_description(); ?>
<?php get_template_part('thumb'); ?>
<?php get_sidebar(); ?>
<?php get_footer(); ?>