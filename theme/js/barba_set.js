var info = require("../../docs/info")
window.jQuery = $ = require('jquery')
Barba = require('barba.js')
hljs = require('highlight.js')

$(window).on('load',function(){
    
    Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container, newPageRawHTML) {
        var $newPageHead = $( '<head />' ).html(
            $.parseHTML(
                newPageRawHTML.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0]
              , document
              , true
            )
        );
        var headTags = [
            "meta[name='keywords']"
          , "meta[name='description']"
          , "meta[property^='og']"
          , "meta[name^='twitter']"
          , "title"
        ].join(',');
        $( 'head' ).find( headTags ).remove();
        $newPageHead.find( headTags ).appendTo( 'head' );
        document.body.scrollTop = 0;
        hljs.initHighlightingOnLoad();
    });
    
     
    Barba.Pjax.start();
    Barba.Prefetch.init();
    });