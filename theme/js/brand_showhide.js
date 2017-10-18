window.jQuery = $ = require('jquery');

$(window).on("scroll",function(){
  var svar = $(window).scrollTop();
  if( svar <= 100 ){
    $("#navbar_brand").show("fast");
  } else {
    $("#navbar_brand").hide("fast");
  }
});
