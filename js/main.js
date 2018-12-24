$('.button').on("click",function(){
    $('.myname, .mytitle, .button, img').removeClass('zoomIn delay-1s bounceIn delay-2s');
    $('img').addClass('animated');
    $('.myname, .mytitle, .button, img').addClass('bounceOut');
})