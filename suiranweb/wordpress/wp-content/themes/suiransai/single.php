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
			<div style="padding-bottom:7px;"><img src="<?php echo get_avatar_onlyurl( get_the_author_meta( 'ID' ), 24 ); ?>" style="margin-bottom: -6px;"> <?php the_author_posts_link(); ?> | <i class="fa fa-book" aria-hidden="true"></i>
 <?php the_category(' '); ?><?php the_tags( '| <i class="fa fa-tags" aria-hidden="true"></i> ', ', ', '' ); ?>
			</div>
			<?php the_content(); ?>
		</div>
				<div class="card-action">
		<div class="ninja_onebutton">
<script type="text/javascript">
//<![CDATA[
(function(d){
if(typeof(window.NINJA_CO_JP_ONETAG_BUTTON_ec2c73dceb084177a8128786f4c9db5d)=='undefined'){
    document.write("<sc"+"ript type='text\/javascript' src='\/\/omt.shinobi.jp\/b\/ec2c73dceb084177a8128786f4c9db5d'><\/sc"+"ript>");
}else{
    window.NINJA_CO_JP_ONETAG_BUTTON_ec2c73dceb084177a8128786f4c9db5d.ONETAGButton_Load();}
})(document);
//]]>
</script><span class="ninja_onebutton_hidden" style="display:none;"><?php the_permalink(); ?></span><span style="display:none;" class="ninja_onebutton_hidden"><?php the_title(); ?></span>
</div>
		</div>
		<?php endif; ?>
		</div>
	</div>
</div>
<?php get_sidebar(); ?>
<?php get_footer(); ?>
