<?php get_header(); ?>
<div class="col s12 l8">
<p>ここでは、日々の活動や、皆様へのお知らせを書いていきます。</p>
<h2>記事をさがす</h2>
 <ul class="fa-ul collapsible" data-collapsible="accordion">
<li><div class="collapsible-header"><i class="fa-ul fa fa-search" aria-hidden="true"></i> 文字で探す</div>
    <div class="collapsible-body"><div class="container">
        <?php get_search_form(); ?>
    </div></div></li>
<li><div class="collapsible-header"><i class="fa-ul fa fa-book" aria-hidden="true"></i> カテゴリ(年度と種類)で探す</div>
    <div class="collapsible-body"><div class="container">
<?php wp_list_categories('oderby=term_group&style=none'); ?>
    </div></div></li>
<li><div class="collapsible-header"><i class="fa-ul fa fa-tags" aria-hidden="true"></i> タグ(班課)で探す</div>
    <div class="collapsible-body"><div class="container">
        <?php wp_tag_cloud(); ?>
    </div></div></li>
<li><div class="collapsible-header"><i class="fa-ul fa fa-user" aria-hidden="true"></i> 人(実行委員)で探す</div>
    <div class="collapsible-body"><div class="container">
     <!--投稿者一覧を表示-->
        <?php $users =get_users( array('orderby'=>ID,'order'=>ASC) );
        foreach($users as $user):
            $uid = $user->ID;
            $userData = get_userdata($uid);
           echo '<div class="writer-profile" style="margin: 2px; padding: 0px;">';
           echo '<p style="margin: 0px； padding: 0px;"><a href="'.get_bloginfo(url).'/?author='.$uid.'">';
           echo get_avatar( $uid ,30 ).$user->display_name;
           echo '</a></p></div>';
                endforeach; ?>
    </div></div></li>
</ul>
</div>
<?php get_template_part('thumb'); ?>
<?php get_sidebar(); ?>
<?php get_footer(); ?>
