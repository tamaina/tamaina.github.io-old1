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
		<div class="card teal lighten-5">
		<div class="card-content">
			<p><?php the_category(); ?>投稿者:<?php the_author_posts_link(); ?> ／ <?php the_tags(); ?> ／ 作成:<?php the_time('Y年m月d日（D）'); ?>
			</p>
			<h2><span class="card-title entry_title"><?php the_title(); ?></span></h2>
			<?php if ( has_post_thumbnail() ) : ?>
			<div style="width:100px;height:100px;float:left;"><?php the_post_thumbnail( array(100,100) ); ?></div>
			<div style="float:right;"><?php the_content(); ?></div>
			<?php else: ?>
			<div style="float:none;"><?php the_content(); ?></div>
			<?php endif; ?>
		</div>
		<?php endif; ?>
		</div>
	</div>
</div>
<?php get_sidebar(); ?>
<?php get_footer(); ?>
