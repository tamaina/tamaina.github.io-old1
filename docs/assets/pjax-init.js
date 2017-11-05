var Pjax = require('pjax-api').Pjax;
new Pjax({  areas: ['#main, #disqus_wrap, .pjax-reload, #breadcrumb'], update: { head: 'meta, link' }  });