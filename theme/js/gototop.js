var $ = require('jquery');
$(function(){
    $('.trigger-gototop').on('click', function(){
        $('html,body').animate({scrollTop:0},200);
    })
})
$(window).on('pjax:load',function(){
    $('.trigger-gototop').on('click', function(){
        $('html, body').animate({scrollTop:0},200);
    })
});