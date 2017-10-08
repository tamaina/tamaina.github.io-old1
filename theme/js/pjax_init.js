var Pjax = require('pjax-api').Pjax;

new Pjax({  areas: ['#main, #disqus_wrap'], update: { head: 'meta, link' }  });

$(document).on('pjax:ready',function(){
    hljs.initHighlighting.called = false;
    hljs.initHighlighting();
    $('#navbarNav').collapse('hide')
    gtag('event', 'page_view')
})