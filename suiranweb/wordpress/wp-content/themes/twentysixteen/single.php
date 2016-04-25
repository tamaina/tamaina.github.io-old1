<?php
/**
 * The template for displaying all single posts and attachments
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */

get_header(); ?>
<div class="col s12 m8"><div class="col s12 m8">
	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
		<?php if ( have_posts() ) : ?>
		<?php while ( have_posts() ) : the_post(); ?>
		<div class="card teal lighten-5">
		<div class="card-content">
			<span class="post_header"><?php the_category(); ?><?php echo echo get_avatar( get_the_author_meta( 'ID' ), 32 ); the_author_posts_link(); ?> ／ <?php the_tags( 'Tags: ', ', ', '／' ); ?> 作成:<?php the_time('Y年m月d日（D）'); ?>
			</span>
		    <a href="<?php the_permalink(); ?>">
			<h2><span class="card-title entry_title"><?php the_title(); ?></span></h2>
			<?php the_content(); ?>
			</a>
		</div>
		<div class="card-action">
		<div id="comments" class="commentarea">
<?php
	while(have_posts()) {
		the_post();
		get_template_part('content');
		if( is_singular('post') ) {
			comments_template();
		}
	} ?>
<ul id="comments-list">
    <?php wp_list_comments(array(
            'avatar_size'=>48,
            'style'=>'ul',
            'type'=>'comment',
        )); ?>
</ul>
		</div>
		</div>
		</div>
		<?php endwhile; endif; ?>
		</div>
	</div>
</div>
<?php get_sidebar(); ?>
<?php get_footer(); ?>
