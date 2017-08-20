new Pjax({  areas: ['#main'], update: { head: 'meta, link' }  })

$(document).on('pjax:ready',function(){
    hljs.initHighlighting.called = false;
    hljs.initHighlighting();
})