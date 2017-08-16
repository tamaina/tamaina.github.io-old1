function socialbutton(){

$('.btn-social-link').on('click',function(){
  ga('send', 'event', 'Social', 'Link', $(this).attr('data-label'), {
    nonInteraction: false
  });
});

window.gacb_gplusone = function(){
  ga('send', 'social', 'Google+', '+1', 'https://suiranfes.com/', {
    nonInteraction: false
  });
    if (data['state'] == 'on') {void(0);}

}

window.fbAsyncInit = function() {
  FB.Event.subscribe('edge.create',function(response){
    ga('send', 'social', 'Facebook', 'like', 'https://suiranfes.com/', {
      nonInteraction: false
    });
  });
};
}

$(function(){
  $.ajaxSetup({ cache: true });
  $.getScript('//connect.facebook.net/ja_JP/sdk.js', function(){
    FB.init({
      appId      : '689195224565280',
      status     : true,
      xfbml      : true,
      version    : 'v2.8'
    });
    $('#loginbutton,#feedbutton').removeAttr('disabled');
  });
});

$(document).ready(function(){
  socialbutton();
});

$(window).on('load',function(){
  $('#after_fbshare').html('<div class="fb-like" data-href="https://2018.suiranfes.com/" data-layout="button_count" data-action="like" data-show-faces="true" data-share="false"></div>');
  FB.XFBML.parse();
});
