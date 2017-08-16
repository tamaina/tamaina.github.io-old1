function getUrlVars(url){
    let vars = [], max = 0, hash = "", array = "";

    hash  = url.slice(1).split('&');    
    max = hash.length;
    for (var i = 0; i < max; i++) {
        array = hash[i].split('=');
        vars.push(array[0]);
        vars[array[0]] = array[1];
    }

    return vars;
}

$(window).on('load',function(){

var GreatBarba = Barba.BaseTransition.extend({
  start: function() {
    Promise
    .all([this.newContainerLoading, this.fadeOut()])
    .then(this.fadeIn.bind(this));
  },
 
  fadeOut: function() {
    $('#navbar').collapse('hide')
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
    // jquery-pjaxから借りた
    var $newPageHead = $( '<head />' ).html(
        $.parseHTML(
            newPageRawHTML.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0]
          , document
          , true
        )
    );
    var headTags = [ // 更新になってほしいタグ
        "meta[name='keywords']"
      , "meta[name='description']"
      , "meta[property^='og']"
      , "meta[name^='twitter']"
      , "title"
    ].join(',');
    $( 'head' ).find( headTags ).remove(); // タグを削除する
    $newPageHead.find( headTags ).appendTo( 'head' ); // タグを追加する

    document.body.scrollTop = 0;
    if(vars.collapse){$(window).scrollTop( document.getElementById( vars.collapse ).getBoundingClientRect().top + window.pageYOffset - Number($('nav').height()) - 80 );}
    require('./bootstrap.js');
    ga('send', 'pageview', window.location.pathname.replace(/^\/?/, '/') + window.location.search);
});

// returnに作ったトランジションを設定します。
Barba.Pjax.getTransition = function() {
  return GreatBarba;
};
 
Barba.Pjax.start();
Barba.Prefetch.init();
});