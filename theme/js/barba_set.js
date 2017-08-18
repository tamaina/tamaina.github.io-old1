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
    Prism.highlightAll();
});

 
Barba.Pjax.start();
Barba.Prefetch.init();
});