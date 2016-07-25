/*

<ul>
<li><a href="https://twitter.com/Takataka_tmo" target="_blank" class="NormalLink"><i class="fa fa-twitter-square" aria-hidden="true"></i>マンドリン部【TMO】</a></li>
<li><a href="https://twitter.com/otokogumi_12th" target="_blank" class="NormalLink"><i class="fa fa-twitter-square" aria-hidden="true"></i>和太鼓部【漢組】</a></li>
<li><a href="https://twitter.com/takasaki_tekken" target="_blank" class="NormalLink"><i class="fa fa-twitter-square" aria-hidden="true"></i>鉄道研究部</a></li>
<li><a href="https://twitter.com/takatakaglee" target="_blank" class="NormalLink"><i class="fa fa-twitter-square" aria-hidden="true"></i>合唱部</a></li>
<li><a href="https://twitter.com/takatakasuibu" target="_blank" class="NormalLink"></a><i class="fa fa-twitter-square" aria-hidden="true"></i>吹奏楽部【TWO】</li>
<li><a href="http://taka2gleeclub.blog.fc2.com/" target="_blank" class="NormalLink">合唱部ブログ</a></li>
<li><a href="http://ths.tekken.hariko.com/" target="_blank" class="NormalLink">鉄道研究部ホームページ</a></li>
<li><a href="http://www.takasaki-hs.gsn.ed.jp/external_links/seitokai/toppage.html" target="_blank" class="NormalLink">生徒会ホームページ</a></li>
<li><a href="http://www.takasaki-hs.gsn.ed.jp/" target="_blank" class="NormalLink">群馬県立高崎高等学校ホームページ</a></li>
</ul>
*/
function WriteLinks(){
$.getJSON("./scripts/Links.json", function(data){
console.log('links');
console.table(data);
var html = '<ul>';
    for(i=0;i<data.length;i++){
        if ( data[i].Twitter ){
            html += '<li id="'
                  + data[i].ID
                  + '"><a href="https://twitter.com/'
                  + data[i].Twitter
                  + '" target="_blank" class="NormalLink"><i class="fa fa-twitter-square" aria-hidden="true"></i>'
                  + data[i].Name
                  + '</a></li>';
        } else if ( data[i].URL ){
            html += '<li id="'
                  + data[i].ID
                  + '"><a href="'
                  + data[i].URL
                  + '" target="_blank" class="NormalLink">'
                  + data[i].Name
                  + '</a></li>';
        }
    }
html += '</ul>'
$('.HereIsLinks').html( html );
});
}

/*
<div class="navbar-fixed">
  <nav class="navigationbar light-blue darken-3">
    <div class="nav-wrapper" style="margin-left:1em;padding-right:1em;">
      <a href="javascript:void(0)" class="brand-logo grey-text text-lighten-3 blogo">第65回翠巒祭</a>
       <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a class="grey-text text-lighten-3" href="./">トップ</a></li>
        <li><a class="grey-text text-lighten-3" href="./about/">翠巒祭について</a></li>
        <li><a class="grey-text text-lighten-3" href="./attractions/">企画・模擬店</a></li>
        <li><a class="grey-text text-lighten-3" href="./access/">アクセス</a></li>
        <li><a class="grey-text text-lighten-3" href="./qa/">Q & A</a></li>
        <li><a class="grey-text text-lighten-3" href="./garally/">ギャラリー</a></li>
        <li><a class="grey-text text-lighten-3" href="./steering_committee/">実行委員</a></li>
        <li><a class="grey-text text-lighten-3" href="./wordpress/">Press</a></li>
<!--        <li><a class="grey-text text-lighten-3" href="./game/">Game</a></li>-->
      </ul>
      <ul id="slide-out" class="side-nav">
        <li><a href="./">トップ</a></li>
        <li><a href="./about/">翠巒祭について</a></li>
        <li><a href="./attractions/">企画・模擬店</a></li>
        <li><a href="./access/">アクセス</a></li>
        <li><a href="./qa/">Q & A</a></li>
        <li><a href="./garally/">ギャラリー</a></li>
        <li><a href="./steering_committee/">実行委員</a></li>
        <li><a href="./wordpress/">Press</a></li>
<!--        <li><a href="./game/">Game</a></li>-->
      </ul>
      <a href="javascript:void(0)" data-activates="slide-out" class="button-collapse">
          <i class="fa fa-bars" aria-hidden="true" style="color: white;"></i>
      </a>
    </div>
  </nav>
</div>
*/
/*
<ul>
        <li><a class="grey-text text-lighten-3" href="./">トップ</a></li>
        <li><a class="grey-text text-lighten-3" href="./about/">翠巒祭について</a></li>
        <li><a class="grey-text text-lighten-3" href="./attractions/">企画紹介</a></li>
        <li><a class="grey-text text-lighten-3" href="./access/">アクセス</a></li>
        <li><a class="grey-text text-lighten-3" href="./qa/">Q & A</a></li>
        <li><a class="grey-text text-lighten-3" href="./garally/">ギャラリー</a></li>
        <li><a class="grey-text text-lighten-3" href="./steering_committee/">実行委員</a></li>
        <li><a class="grey-text text-lighten-3" href="./wordpress/">Press</a></li>
<!--        <li><a class="grey-text text-lighten-3" href="./game/">Game</a></li>-->
                </ul>
*/

function WriteNavBar(){
var html = '<div class="navbar-fixed"><nav class="navigationbar light-blue darken-3"><div class="nav-wrapper" style="margin-left:1em;padding-right:1em;"><a href="javascript:void(0)" class="brand-logo grey-text text-lighten-3 blogo">第65回翠巒祭</a>',
bar = '<ul id="nav-mobile" class="right hide-on-med-and-down">', slideout = '<ul id="slide-out" class="side-nav">', foothtml = '<ul>';
$.getJSON("./scripts/Nav.json", function(data){
console.log('NavBar');
console.table(data);
    for(i=0;i<data.length;i++){
        bar += '<li><a class="grey-text text-lighten-3" href="'
             + data[i].URL
             + '">'
             + data[i].Name
             + '</a></li>';
        
        slideout += '<li><a href="'
                  + data[i].URL
                  + '">'
                  + data[i].Name
                  + '</a></li>';
        
        foothtml += '<li><a class="NormalLink grey-text text-lighten-3" href="'
                  + data[i].URL
                  + '">'
                  + data[i].Name
                  + '</a></li>';
    }
bar  += '</ul>';
slideout += '</ul>';
html += bar + slideout + '<a href="javascript:void(0)" data-activates="slide-out" class="button-collapse"><i class="fa fa-bars" aria-hidden="true" style="color: white;"></i></a></div></nav></div>';
foothtml += '</ul>';
$('.HereIsNavBar').html( html );
$('.HereIsFooterMenu').html( foothtml );
});
}

function WriteAd(){
$.getJSON("./ads/list.json", function(data){
console.log('ad');
console.table(data);
console.log(WriteAdCore(data));
$('.HereIsAd').each(function(){$(this).html(WriteAdCore(data));});
});
}
function WriteAdCore(data){
var ad_l = data.length, s = 0, m = 0, x = 0, y = 0 ;
  for(i=0;i<ad_l;i++){
    s += data[i].UnitOfContribution;
  }
  m = Math.floor(Math.random()*ad_l);
  m++;
  for(i=0;i<ad_l;i++){
    x = y;
    y += data[i].UnitOfContribution;
    if( x < m && m <= y ) var ad = data[i];
  }
  var adurl = "./ads/" + ad.URL + ".png", html = "";
if(ad.Link){
  html += '<a href="'
        + ad.Link
        + '" class="adl"><img src="'
        + adurl
        + '" style="background-color: '
        + ad.bgColor
        + ';" class="adimg"></a>';
} else {
  html += '<img src="'
        + adurl
        + '" style="background-color: '
        + ad.bgColor
        + ';" class="adimg">';
}
return html;
}

/*
<div class="card-panel">
  <h3>高高王</h3>
    <p>解説</p>
<!--     ### ###     -->
<div class="divider"></div>
<!--     ### ###     -->
  <ul>
    <li>2日目 12:10～12:50</li>
  </ul>
</div>
*/
function WriteHTMLOfEvents(){

$.getJSON("./attractions/Events.json", function(data){
console.log('Events');
console.table(data);
for(m=0;m<data.length;m++){
var outputtargetidPROGS = '.' + data[m].ID + 'Progs';
var outputtargetidTT = '.' + data[m].ID + 'TT';
ProgsArray = data[m].Programs;
console.table(ProgsArray);
TTDay1 = new Array();
TTDay2 = new Array();
var html = '';
for(i=0;i<ProgsArray.length;i++){
    html += '<div class="card-panel"><h3 id="'
         + ProgsArray[i][0]
         + '" >'
         + ProgsArray[i][1]
         + '</h3><p>'
         + ProgsArray[i][2]
         + '</p><div class="divider"></div><ul>';
         for(n=0;n<ProgsArray[i][3].length;n++){
           if(ProgsArray[i][3][n][1] == '1'){TTDay1.push(new Array());TTDay1[TTDay1.length-1].push([i,n]);}
           if(ProgsArray[i][3][n][1] == '2'){TTDay2.push(new Array());TTDay2[TTDay2.length-1].push([i,n]);}
           html += '<li>';
           if(ProgsArray[i][3][n][0]){
             html += ProgsArray[i][3][n][0] + ' '
           }
           html += ProgsArray[i][3][n][1] + '日目 '
                     + ProgsArray[i][3][n][2] + ':' + ProgsArray[i][3][n][3]
                     + ' ～ '
                     + ProgsArray[i][3][n][4] + ':' + ProgsArray[i][3][n][5]
                     + '</li>';
           var minutesval = eval( ProgsArray[i][3][n][2] * 60 + ProgsArray[i][3][n][3] * 1 );
           var endminsval = eval( ProgsArray[i][3][n][4] * 60 + ProgsArray[i][3][n][5] * 1 );
           var timelength = eval( endminsval - minutesval );
           if(ProgsArray[i][3][n][1] == '1'){TTDay1[TTDay1.length-1].push(minutesval , timelength);}
           if(ProgsArray[i][3][n][1] == '2'){TTDay2[TTDay2.length-1].push(minutesval , timelength);}
         }
html += '</ul></div>';
}

$(outputtargetidPROGS).html( html );

TTDay1.sort(function(a,b){
return a[1]-b[1];
});

TTDay2.sort(function(a,b){
return a[1]-b[1];
});
console.log('TTDay1');
console.table(TTDay1);
console.log('TTDay2');
console.table(TTDay2);
var tthtml = '', keisu = 3.8;

if(TTDay1[0]){
    var ttday1html = ttwrite( ProgsArray, TTDay1, 1, keisu );
tthtml += '<div class="card-panel" style="padding: 1.75px;"><h3 style="margin-left:20px;">1日目スケジュール</h3>'
        + ttday1html + '</div>'
}
if(TTDay2[0]){
var ttday2html = ttwrite( ProgsArray, TTDay2, 2, keisu );
tthtml += '<div class="card-panel" style="padding: 1.75px;"><h3 style="margin-left:20px;">2日目スケジュール</h3>'
        + ttday2html + '</div>'
}
$(outputtargetidTT).html( tthtml );

}
});

}

function ttwrite( ProgsArray, TTArray, Day, keisu ){
var ttdhtml = '', restuntil = 0;
if( Day == 1 ){ var restfrom = 720; }
if( Day == 2 ){ var restfrom = 540; }
for(x=0;x<TTArray.length;x++){
  if(x != 0){
    var restfrom = eval( ProgsArray[i][3][n][4] * 60 + ProgsArray[i][3][n][5] * 1 );
  }
  var i = TTArray[x][0][0] , n = TTArray[x][0][1] ; 
  var restuntil = eval( ProgsArray[i][3][n][2] * 60 + ProgsArray[i][3][n][3] * 1 );
  var restheight = eval( restuntil - restfrom );
  if(restheight){
  ttdhtml += '<div style="height: '
              + restheight * keisu
              + 'px;" class="ttrest"></div>';
  }
  var divheight = TTArray[x][2] * keisu;
  ttdhtml += '<div style="height: '
              + divheight + 'px;';
  if( ProgsArray[i][4] != "" ){
  ttdhtml += ProgsArray[i][4]
  }
  if(x % 2 == 0){
  ttdhtml += '" class="ttA">';
  } else {
  ttdhtml += '" class="ttB">';
  }
  ttdhtml += '<a href="attractions/#'
              + ProgsArray[i][0]
              + '" class="aintt"><span class="starttime">'
              + ProgsArray[i][3][n][2] + ':' + ProgsArray[i][3][n][3]
              + '</span><div class="ttprog"><p class="tth3">'
              + ProgsArray[i][1]
              + '</p>';
  if(ProgsArray[i][3][n][0]){
  ttdhtml += '<p class="ttsub">' + ProgsArray[i][3][n][0] + '</p>';
  }
  ttdhtml += '</div><span class="endtime">'
              + ProgsArray[i][3][n][4] + ':' + ProgsArray[i][3][n][5]
              + '</span></a></div>';
}
if( Day == 1 ){ var restuntil = 990; }
if( Day == 2 ){ var restuntil = 960; }
var restfrom = eval( ProgsArray[i][3][n][4] * 60 + ProgsArray[i][3][n][5] * 1 );
var restheight = eval( restuntil - restfrom );
if(restheight){
ttdhtml += '<div style="height: '
            + restheight * keisu
            + 'px;" class="ttrest"></div>';
}
return ttdhtml;
}