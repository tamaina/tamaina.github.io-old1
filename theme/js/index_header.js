jQuery = $ = require('jquery');

headwriter_flag = false;

function top_img_chg(){
    var ransu = Math.floor(Math.random()*35) + 1,
        past = $('#headimgwrp div:visible');
    $('#headimg' + ransu).fadeIn('slow');
    $(past).fadeOut('slow');
    $(past).css('background-position','left bottom');
    setTimeout(top_img_chg,17500);
}
function register_imgs(){
    for(var i = 1; i < 36; i++){
        $('#headimgwrp').append("<div style='background-image:url(\"../files/top/1st/" + i + ".jpeg\")' alt='' id='headimg" + i + "' data-imgnum='" + i + "'></div>");
        $('#headimg' + i ).css('display', 'none');
    }
}

$(window).on('load',function(){
    register_imgs();
    headwriter_flag = true;
    setTimeout(top_img_chg,17500);
});

$(document).on('pjax:ready',function(){
    register_imgs()
    if( !headwriter_flag ){
        setTimeout(top_img_chg,17500);
    }
});