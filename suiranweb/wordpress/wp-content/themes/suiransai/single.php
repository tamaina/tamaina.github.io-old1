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
		<div id="article" class="card grey lighten-5">
		<div class="card-content">
            <?php the_time('Y年m月d日（D） H時m分'); ?>
			<div style="padding-bottom: 7px;"><a href="<?php echo home_url(); ?>/?auther=<?php echo get_the_author_meta( 'ID' ) ?>"><img src="<?php echo get_avatar_onlyurl( get_the_author_meta( 'ID' ), 48 ); ?>" style="margin-right:4px;display:block;float:left;"></a><?php the_author_posts_link(); ?> | <i class="fa fa-book" aria-hidden="true"></i><?php the_category(' '); ?><?php the_tags( ' | <i class="fa fa-tags" aria-hidden="true"></i> ', ', ', '' ); ?><br><i class="fa fa-calendar-o" aria-hidden="true"></i> <?php the_time('Y年m月d日（D）'); ?>
			<h2><span class="card-title entry_title"><?php the_title(); ?></span></h2>
			</div>
            <?php if ( has_post_thumbnail() ) : ?>
            <div style="width:106px;height:106px;display:inline-block;float:left;">
			<?php the_post_thumbnail( array(100,100) ); ?></div>
			<?php else: ?>
			<div style="width:106px;height:106px;display:inline-block;float:left;">
			<img src="<?php echo get_bloginfo('template_directory'); ?>/images/eyecatch.png" style="width:100px;height:100px;"></div>
			<?php endif; ?>
			<?php the_content(); ?>
		</div>
		<div class="card-action"><p class="share_buttons">
  <a href="http://line.me/R/msg/text/?%e9%ab%98%e5%b4%8e%e9%ab%98%e6%a0%a1%e6%96%87%e5%8c%96%e7%a5%ad%e3%80%8c%e7%bf%a0%e5%b7%92%e7%a5%ad%e3%80%8d%e5%85%ac%e5%bc%8f%e3%83%96%e3%83%ad%e3%82%b0%e3%81%ae%e8%a8%98%e4%ba%8b%e3%81%a7%e3%81%99%e3%80%82%0d%0a%0d%0a%e3%82%bf%e3%82%a4%e3%83%88%e3%83%ab%e3%80%8c<?php echo urlencode( $post->post_title ); ?>%e3%80%8d%0d%0a%0d%0a%e7%bf%a0%e5%b7%92%e7%a5%ad%e3%83%9b%e3%83%bc%e3%83%a0%e3%83%9a%e3%83%bc%e3%82%b8%3a%20http%3a%2f%2fsuiranfes%2ecom%2f" class="waves-effect waves-light btn" target="_blank" style="color: white;"><img src="./img/line.png" style="height: 1em;" /> LINE</a>
  <a href="https://twitter.com/intent/tweet?url=<?php echo urlencode( empty($_SERVER['HTTPS']) ? 'http://' : 'https://' ) . urlencode( $_SERVER['HTTP_HOST'] ) . urlencode( $_SERVER['REQUEST_URI'] ); ?>&text=%e9%ab%98%e5%b4%8e%e9%ab%98%e6%a0%a1%e6%96%87%e5%8c%96%e7%a5%ad%e3%80%8c%e7%bf%a0%e5%b7%92%e7%a5%ad%e3%80%8d%e3%81%ae%e5%85%ac%e5%bc%8f%e3%83%96%e3%83%ad%e3%82%b0%e3%81%ae%e3%81%93%e3%81%ae%e8%a8%98%e4%ba%8b%e3%82%92%e8%aa%ad%e3%82%93%e3%81%a7%e3%81%8f%e3%81%a0%e3%81%95%e3%81%84%ef%bc%81&original_referer=&related=suirannsai64&via=suirannsai64&hashtags=%E3%82%B9%E3%82%A4%E3%83%A9%E3%83%B3%E7%A5%AD" target="_blank" class="waves-effect waves-light btn" target="_blank" style="color: white;"><i class="fa fa-twitter" aria-hidden="true"></i> Tweet</a>
  <a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo urlencode( empty($_SERVER['HTTPS']) ? 'http://' : 'https://' ) . urlencode( $_SERVER['HTTP_HOST'] ) . urlencode( $_SERVER['REQUEST_URI'] ); ?>" class="waves-effect waves-light btn" target="_blank" style="color: white;"><i class="fa fa-facebook-official" aria-hidden="true"></i> facebook</a>
  <a href="https://plus.google.com/share?url=<?php echo urlencode( empty($_SERVER['HTTPS']) ? 'http://' : 'https://' ) . urlencode( $_SERVER['HTTP_HOST'] ) . urlencode( $_SERVER['REQUEST_URI'] ); ?>" class="waves-effect waves-light btn" target="_blank" style="color: white;"><i class="fa fa-google-plus" aria-hidden="true"></i> Google+</a>
  <a href="http://b.hatena.ne.jp/entry/<?php echo urlencode( empty($_SERVER['HTTPS']) ? 'http://' : 'https://' ) . urlencode( $_SERVER['HTTP_HOST'] ) . urlencode( $_SERVER['REQUEST_URI'] ); ?>" class="hatena-bookmark-button waves-effect waves-light btn" data-hatena-bookmark-layout="simple" title="SuiranPress%20<?php echo urlencode( $post->post_title ); ?>" style="color: white;"><img src="./img/hatenabookmark-logomark.svg" style="display: inline; height: 1.5em; margin-bottom: -4px;"> HATENA</a><script type="text/javascript" src="http://b.st-hatena.com/js/bookmark_button.js" charset="utf-8" async="async"></script>
  </p></div>
	</div>
</div></div>
<?php endif; ?>
<?php get_sidebar(); ?>
<?php get_footer(); ?>
