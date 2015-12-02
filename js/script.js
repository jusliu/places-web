$(document).ready(function(){
    $('.magnify-food').hover(function() {
        $(this).addClass('getBigger');

    }, function() {
        $(this).removeClass('getBigger');
        });
    });
    $('.button').click(function() {
        $(window).scrollTop(0);
    });

$(window).load(function() {
        $('#loading').hide();
    });
window.onbeforeunload = function () {
    $('#loading').show();
}