jQuery = $ = require('jquery');
$("#share_modal").on("shown.bs.modal",function(){
    if(window.FB) FB.XFBML.parse()
    if(window.twttr) twttr.widgets.load()
    if(window.gapi) gapi.plusone.go()
    if(window.LineIt) LineIt.loadButton()
})