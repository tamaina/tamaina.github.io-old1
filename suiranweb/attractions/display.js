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

$.getJSON("attractions/Events.json", function(data){
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
console.table(TTDay1);
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