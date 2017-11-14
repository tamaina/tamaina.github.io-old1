jQuery = $ = require('jquery');
var readButtonScripts = false
$("#share_modal").on("shown.bs.modal",function(){
    if(window.FB) FB.XFBML.parse()
    if(window.twttr) twttr.widgets.load()
    if(window.gapi) gapi.plusone.go()
    if(window.LineIt) LineIt.loadButton()

    if(!readButtonScripts){
      $("body").append("<script src='https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.11&appId=#{site.social_media.facebook.appId}' id='facebook-jssdk'></script>")
      .append("<script src='https://platform.twitter.com/widgets.js'></script>")
      .append("<script src='https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js'></script>")
      readButtonScripts = true;
    }
})