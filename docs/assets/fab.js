function adBlockDetected(){alert("広告ブロッカーが有効です。\n\nこのサイトに有害な広告はありません。\nしかし、サイトを正常に表示できない恐れが\nありますので、無効にして閲覧してください。")}
$(window).on('load',function(){
    if(typeof FuckAdBlock === 'undefined'){adBlockDetected()}
    else{fuckAdBlock.onDetected(adBlockDetected);}
})