window.jQuery = $ = require('jquery');

$(window).load(function(){
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-107753466-1', { 'send_page_view': false });
});
