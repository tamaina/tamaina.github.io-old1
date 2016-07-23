<?php get_header(); ?>

<div class="col s12">
<p>ここでは、日々の活動や、皆様へのお知らせを書いていきます。</p>
<h2>記事をさがす</h2>
 <ul class="collapsible" data-collapsible="accordion">
<li><div class="collapsible-header"><i class="fa fa-search" aria-hidden="true"></i> 語句で探す</div>
    <div class="collapsible-body" style="padding-top:1em;padding-bottom:1em;"><div class="container">
        <?php get_search_form(); ?>
    </div></div></li>
<li><div class="collapsible-header"><i class="fa fa-book" aria-hidden="true"></i> 年度や投稿の種類から探す</div>
    <div class="collapsible-body" style="padding-top:1em;padding-bottom:1em;"><div class="container">
<?php wp_list_categories('oderby=term_group&style=none'); ?>
    </div></div></li>
<li><div class="collapsible-header"><i class="fa fa-tags" aria-hidden="true"></i> 班課から探す</div>
    <div class="collapsible-body" style="padding-top:1em;padding-bottom:1em;"><div class="container">
        <?php wp_tag_cloud(); ?>
    </div></div></li>
<li><div class="collapsible-header"><i class="fa fa-user" aria-hidden="true"></i> 実行委員から探す</div>
    <div class="collapsible-body" style="padding-top:1em;padding-bottom:1em;"><div class="container"><div class="row">
     <!--投稿者一覧を表示-->
        <?php $users =get_users( array('orderby'=>'ID','order'=>'ASC') );
        foreach($users as $user):
            $uid = $user->ID;
            $userData = get_userdata($uid);
           echo '<div class="col s12 m4 l2"><div class="writer-link" style="margin: 0px; padding: 4px;">';
           echo '<a href="'.get_bloginfo('url').'/?author='.$uid.'">';
           echo '<img src="' .get_avatar_onlyurl( $uid , 24 ) .'" style="margin-bottom: -6px;">'.$user->display_name;
           echo '</a><br></div></div>';
                endforeach; ?>
    </div></div></div></li>
</ul>
</div>
<?php get_template_part('thumb'); ?>
<?php get_sidebar(); ?>
<?php get_footer(); ?>
