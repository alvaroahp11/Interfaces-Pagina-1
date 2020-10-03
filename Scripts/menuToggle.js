jQuery('document').ready(function($){
    var menuBtn = $('.menu-icon');
    var menu = $('#menu');

    menuBtn.click(function(){
        if (menu.hasClass('show')){
            menu.removeClass('show');
        }else{
            menu.addClass('show'); 
        } 
    });

    var notiEventBtn = $('.tablet-news');
    var mainDisplay = $('.main');
    var notiEventDisplay = $('.news');

    notiEventBtn.click(function($){
        if (mainDisplay.hasClass('show')){
            mainDisplay.removeClass('show');
            notiEventDisplay.addClass('show');
        }else{
            mainDisplay.addClass('show');
            notiEventDisplay.removeClass('show');
        }
    });




});