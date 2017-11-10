var Pjax = require('pjax-api').Pjax;
new Pjax({  areas: ['#main, #disqus_wrap, .pjax-reload, #breadcrumb, #share_modal_body'], update: { head: 'meta, link' }  });