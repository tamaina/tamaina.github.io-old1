
<div class="col s12 l8">
	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
		<?php if ( have_posts() ) : ?>
		<?php while ( have_posts() ) : the_post(); ?>
		<div id="article" class="row card teal lighten-5">
		<div class="card-content col s12">
			<div style="padding-bottom: 7px;"><a href="<?php echo home_url(); ?>/?auther=<?php echo get_the_author_meta( 'ID' ) ?>"><img src="<?php echo get_avatar_onlyurl( get_the_author_meta( 'ID' ), 48 ); ?>" style="margin-right:4px;display:block;float:left;"></a><?php the_author_posts_link(); ?> | <i class="fa fa-book" aria-hidden="true"></i><?php the_category(' '); ?><?php the_tags( ' | <i class="fa fa-tags" aria-hidden="true"></i> ', ', ', '' ); ?><br><i class="fa fa-calendar-o" aria-hidden="true"></i> <?php the_time('Y年m月d日（D） H時m分'); ?>
			<h2><span class="card-title entry_title"><a href="<?php the_permalink(); ?>" class="index_press"><?php the_title(); ?></a></span></h2>
			</div>
            <?php if ( has_post_thumbnail() ) : ?>
            <div style="width:106px;height:106px;float:left;display:inline-block;">
			<a href="<?php the_permalink(); ?>"><?php the_post_thumbnail( array(100,100) ); ?></a></div>
			<div style="display: block;"><?php the_content('Read more...'); ?></div>
			<?php else: ?>
			<div style="width:106px;height:106px;float:left;display:inline-block;">
			<a href="<?php the_permalink(); ?>"><img src="<?php echo get_bloginfo('template_directory'); ?>/images/eyecatch.png" style="width:100px;height:100px;"></a></div>
			<div style="display: block;"><?php the_content('Read more...'); ?></div>
			<?php endif; ?>
		</div>
		</div>
		<?php endwhile; else: ?>
		<div><p>投稿はありません</p></div>
		<?php endif; ?>
		</main><!-- .site-main -->
	</div><!-- .content-area -->
</div>