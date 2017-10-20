hljs = require('highlight.js');

hljs.initHighlightingOnLoad();

$(document).on('pjax:ready',function(){
    hljs.initHighlighting.called = false;
    hljs.initHighlighting();
});