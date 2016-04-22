<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */

get_header(); ?>
<div class="col s12 l8">
	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
		<?php if ( have_posts() ) : ?>
		<?php while ( have_posts() ) : the_post(); ?>
		<div class="row card teal lighten-5">
		<div class="card-content col s12">
			<p><?php the_category(); ?>投稿者:<?php the_author_posts_link(); ?> ／ <?php the_tags(); ?> ／ 作成:<?php the_time('Y年m月d日（D）'); ?>
			</p>
		    <a href="<?php the_permalink(); ?>" class="index_press">
			<h2><span class="card-title entry_title"><?php the_title(); ?></span></h2>
			<?php if ( has_post_thumbnail() ) : ?>
			<div style="width:100px;height:100px;float:left;"><?php the_post_thumbnail( array(100,100) ); ?></div>
			<div style="float:right;"><?php echo mb_substr($post->post_content,0,200).'...'; ?></div>
			<?php else: ?>
			<div style="float:none;"><?php echo mb_substr($post->post_content,0,200).'...'; ?></div>
			<?php endif; ?>
			</a>
	</div>
</div>
		<?php endwhile; endif; ?>
		
	<?php $paged = get_query_var('paged'); ?>

	<?php query_posts("posts_per_page=10&paged=$paged"); ?>

	 

	<?php if (have_posts()) : while(have_posts()) : the_post(); ?>

	

	<?php endwhile; ?>

	<?php else: ?>

	<?php endif; ?>
	<?php if(function_exists('wp_pagenavi')) { wp_pagenavi(); } ?>
		</main><!-- .site-main -->
	</div><!-- .content-area -->
</div>
<?php get_sidebar(); ?>
<?php get_footer(); ?>
