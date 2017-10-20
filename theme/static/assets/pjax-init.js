
var Pjax = require('pjax-api').Pjax;
new Pjax({  areas: ['#main, #disqus_wrap'], update: { head: 'meta, link' }  });
