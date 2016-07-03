<?php get_header(); ?>
<h2><i class="fa fa-book" aria-hidden="true"></i> カテゴリ:<?php single_cat_title(); ?></h2>
<div class="card-panel"><?php echo category_description(); ?></div>
<?php get_template_part('thumb'); ?>
<?php get_sidebar(); ?>
<?php get_footer(); ?>
