var $ = require('jquery');

$(function(){
    $('.trigger-gototop').on('click', function(){
        $('html,body').animate({scrollTop:0},200);
    })
})
$(document).on('pjax:content',function(){
    $('.trigger-gototop').on('click', function(){
        $('html, body').animate({scrollTop:0},200);
    })
});