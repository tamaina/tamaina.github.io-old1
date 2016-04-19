<?php
/**
 * The template for displaying pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages and that
 * other "pages" on your WordPress site will use a different template.
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */

get_header(); ?>
<div class="col s12 m8">
	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
		<?php if ( have_posts() ) : ?>
		<?php while ( have_posts() ) : the_post(); ?>
		<div class="card teal lighten-5">
		<div class="card-content">
			<p><?php the_category(); ?>投稿者:<?php the_author_posts_link(); ?> ／ <?php the_tags(); ?> ／ 作成:<?php the_time('Y年m月d日（D）'); ?>
			</p>
		    <a href="<?php the_permalink(); ?>">
			<h2><span class="card-title entry_title"><?php the_title(); ?></span></h2>
			<?php the_content(); ?>
			</a>
		</div>
		<?php endwhile; endif; ?>
		</div>
	</div>
</div>
<?php get_sidebar(); ?>
<?php get_footer(); ?>
