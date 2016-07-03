<?php get_header(); ?>
<?php the_author_meta( $field, $userID ); ?>
<h2><i class="fa fa-user" aria-hidden="true"></i> 実行委員:<img src="<?php echo get_avatar_onlyurl( get_the_author_meta( 'ID' ), 50 ); ?>" style="display: inline; margin: 3px; height: 25pt; width: 25pt; margin-bottom: -5px;"><?php the_author_meta( nickname, $author ); ?></h2>
<div class="card-panel">
<?php if( get_the_author_description() ) { echo wpautop( get_the_author_description() ); } else { echo the_author_meta( nickname, $author ).'の投稿一覧です。'; }?>
</div>
<?php get_template_part('thumb'); ?>
<?php get_sidebar(); ?>
<?php get_footer(); ?>