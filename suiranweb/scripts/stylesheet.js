function read_stylesheet(){
    $.getJSON("script/stylesheets.json", function(data){
    var newstylesheet = '<link rel="stylesheet" href="'
              + data[i]
              + '">';
    $('head link:last').after(newstylesheet);
    });
}