$(window).on('load',function(){

var GreatBarba = Barba.BaseTransition.extend({
  start: function() {
    Promise
    .all([this.newContainerLoading, this.fadeOut()])
    .then(this.fadeIn.bind(this));
  },
 
  fadeOut: function() {
    $(this.oldContainer).removeClass('animated fadeIn').removeClass('animated zoomOut');
    $(this.newContainer).removeClass('animated fadeIn').removeClass('animated zoomOut');
    return $(this.oldContainer).addClass('animated zoomOut').promise();
  },
 
  fadeIn: function() {
    var _this = this;
    var $el = $(this.newContainer);
    $el.css({
      visibility : 'visible'
    }).addClass('animated fadeIn');
    _this.done()
  },
});
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
});

// returnに作ったトランジションを設定します。
Barba.Pjax.getTransition = function() {
  return GreatBarba;
};
 
Barba.Pjax.start();
Barba.Prefetch.init();
});