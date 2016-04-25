<?php
/**
 * The template for displaying all single posts and attachments
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */

get_header(); ?>
<div class="col s12 l8">
	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
		<?php if ( have_posts() ) : the_post(); ?>
		<div class="card grey lighten-5">
		<div class="card-content">
			<span class="post_header"><?php the_category(); ?><?php echo get_avatar( get_the_author_meta( 'ID' ), 32 ); the_author_posts_link(); ?> ／ <?php the_tags( 'Tags: ', ', ', '／' ); ?> 作成:<?php the_time('Y年m月d日（D）'); ?>
			</span>
			<h2><span class="card-title entry_title"><?php the_title(); ?></span></h2>
			<div style="float:none;"><?php the_content(); ?></div>
		</div>
		<?php endif; ?>
		</div>
	</div>
</div>
<?php get_sidebar(); ?>
<?php get_footer(); ?>
