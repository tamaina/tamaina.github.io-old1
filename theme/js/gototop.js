var $ = require('jquery');
$(function(){
    $('.trigger-gototop').on('click', function(){
        $("html,body").animate({scrollTop:0});
    })
})