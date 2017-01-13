/**
 * 
 */
 if(sessionStorage.datatheme === undefined){
     $("head link#theme").attr("href", 'css/color/' + 'white' + '.css');
 }else{
     $("head link#theme").attr("href", 'css/color/' + sessionStorage.datatheme + '.css');
 }



$(function () {

    $("span[data-theme]").click(function () {
        theme = $(this).data("theme");
        $("head link#theme").attr("href", 'css/color/' + $(this).data("theme") + '.css');
        sessionStorage.setItem("datatheme", theme );
    });
});


