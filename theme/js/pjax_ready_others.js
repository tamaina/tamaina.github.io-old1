$(document).on('pjax:ready',function(){
  // gtagでpage_viewを送信します。
  gtag('event', 'page_view');
  // DISQUSでresetを送信します。
  // disqus_configはページ内に別に定義されています。
  DISQUS.reset({
    reload: true,
    config: disqus_config
  });
});