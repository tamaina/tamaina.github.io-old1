var agent = UAparser(window.navigator.userAgent);

function suiranfes_chkandro(){

  var isOldAndroidBrowser = false;
  var ua = window.navigator.userAgent;
  if (/Android/.test(ua) && /Linux; U;/.test(ua) && !/Chrome/.test(ua)) {
    isOldAndroidBrowser = true;
  }

  return isOldAndroidBrowser

}

$(function(){
  nosupport = false

  if(suiranfes_chkandro()){
    nosupport = true
    $('.loading').html('<p><a href="intent://suiranfes.com#Intent;scheme=https;action=android.intent.action.VIEW;end" class="btn btn-danger btn-block">タップでブラウザアプリを開きます。</a></p>');
    throw new Error('古いアンドロイドの埋め込みブラウザを検出しました。以降のDOMツリー構築後に行う処理を中止します。');
    return false;
  } else if (agent.browser.name == "IE") {
    nosupport = true
    $('.loading').html('<p class="bg-danger text-white">Internet ExprolerまたはレンダリングエンジンにIE(<b>Trident</b>)を使用するブラウザは対応していません。<br>お手数ですが、Edge,Chromeなどでご閲覧ください。</p>');
    throw new Error('Microsoft Internet Explorerを検出しました。以降のDOMツリー構築後に行う処理を中止します。');
    return false;
  }

});

$(window).on('load',function(){
  nosupport = false

  if(suiranfes_chkandro()){
    nosupport = true
    throw new Error('古いアンドロイドの埋め込みブラウザを検出しました。以降のデータ読み込み終了後に行う処理を中止します。');
    return false;
  } else if (agent.browser.name == "IE") {
    nosupport = true
    $('.loading').html('<p class="bg-danger">Internet ExprolerまたはレンダラにIEを使用するブラウザは対応していません。<br>Edgeまたはその他のブラウザをご利用ください。</p>');
    throw new Error('Microsoft Internet Explorerを検出しました。以降のデータ読み込み終了後に行う処理を中止します。');
    return false;
  }

});