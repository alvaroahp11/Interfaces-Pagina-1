
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
    var notiEventText = $('.tablet-news a')
    var mainDisplay = $('.main');
    var notiEventDisplay = $('.news');

    notiEventBtn.click(function($){
        if (mainDisplay.hasClass('show')){
            mainDisplay.removeClass('show');
            notiEventDisplay.addClass('show');
            notiEventText.text('Temario');
        }else{
            mainDisplay.addClass('show');
            notiEventDisplay.removeClass('show');
            notiEventText.text('Noticias/Eventos');

        }
    });


    // if ($(document).width() == 600){
    //     i = i + 1;
    //     location.reload();
    // }
    
        
   



});