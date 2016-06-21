<?php get_header(); ?>
<?php the_author_meta( $field, $userID ); ?>
<h2><i class="fa fa-user" aria-hidden="true"></i> 実行委員:<?php the_author_meta( nickname, $author ); ?></h2>
<?php the_author_meta( description, $author ); ?>
<?php echo tag_description(); ?>
<?php get_template_part('thumb'); ?>
<?php get_sidebar(); ?>
<?php get_footer(); ?>