var Pjax = require('pjax-api').Pjax;
new Pjax({  areas: ['#main, #disqus_wrap, .pjax-reload'], update: { head: 'meta, link' }  });