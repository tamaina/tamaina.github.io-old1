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
            <?php the_time('Y年m月d日（D）'); ?>
			<h2><span class="card-title entry_title"><?php the_title(); ?></span></h2>
			<div style="padding-bottom:7px;"><img src="<?php echo get_avatar_onlyurl( get_the_author_meta( 'ID' ), 24 ); ?>" style="margin-bottom: -6px;"> <?php the_author_posts_link(); ?> ／ カテゴリ: <?php the_category(' '); ?><?php the_tags( ' ／ タグ: ', ', ', '' ); ?>
			</div>
			<?php the_content(); ?>
		</div>
		<?php endif; ?>
		</div>
	</div>
</div>
<?php get_sidebar(); ?>
<?php get_footer(); ?>
