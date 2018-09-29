$(document).ready(function(){
    $('body').hide();
    $('body').fadeIn(800);

    $('#bars').click(function(){
        $('#navlist ul').slideToggle(800);
        $('#navlist ul li').css('display','block');
    });
});