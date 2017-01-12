
$(function () {
    $("span[data-theme]").click(function () {
        $("head link#theme").attr("href", 'css/color/' + $(this).data("theme") + '.css');
    });
});


