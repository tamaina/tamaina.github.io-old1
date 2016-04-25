<?php get_header(); ?>
<div class="col s12 l8">
	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
		<?php if ( have_posts() ) : ?>
		<?php while ( have_posts() ) : the_post(); ?>
		<div class="row card teal lighten-5">
		<div class="card-content col s12">
			<span class="post_header"><?php the_category(); ?><?php echo get_avatar( get_the_author_meta( 'ID' ), 32 ); the_author_posts_link(); ?> ／ <?php the_tags( 'タグ: ', ', ', '／' ); ?> 作成:<?php the_time('Y年m月d日（D）'); ?>
			</span>
		    
			<h2><span class="card-title entry_title"><a href="<?php the_permalink(); ?>" class="index_press"><?php the_title(); ?></a></span></h2>
			<?php if ( has_post_thumbnail() ) : ?>
			<div style="width:106px;height:106px;float:left;">
			<a href="<?php the_permalink(); ?>"><?php the_post_thumbnail( array(100,100) ); ?></a></div>
			<?php the_content('Read more...'); ?>
			<?php else: ?>
			<?php the_content('Read more...'); ?>
			<?php endif; ?>
		</div>
		</div>
		<?php endwhile; endif; ?>
	<?php if(function_exists('wp_pagenavi')) { wp_pagenavi(); } ?>
		</main><!-- .site-main -->
	</div><!-- .content-area -->
</div>
<?php get_sidebar(); ?>
<?php get_footer(); ?>
