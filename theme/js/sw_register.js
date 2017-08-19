var info = require("../../docs/info")
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(info.site.url.scheme+'://'+info.site.url.host+'/'+info.site.url.path+'/'+info.site.workers[0].outname+'.js').then(function(registration) {
        // 登録成功
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function(err) {
        // 登録失敗 :(
        console.log('ServiceWorker registration failed: ', err);
    });
}