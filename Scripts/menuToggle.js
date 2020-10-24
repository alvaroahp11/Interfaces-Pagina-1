
jQuery('document').ready(function($){
    var menuBtn = $('#menu-icon');
    var menu = $('#menu');

    menuBtn.click(function(){
        menu.toggle(500);
    });

    var notiEventBtn = $('.tablet-news');
    var notiEventText = $('.tablet-news a')
    var mainDisplay = $('.main');
    var notiEventDisplay = $('.news');

    notiEventBtn.click(function($){
        mainDisplay.toggle(100);
        notiEventDisplay.toggle(100);
        if (mainDisplay.css('display') == 'none' ){
            notiEventText.text('Temario');
        }else{
            notiEventText.text('Noticias/Eventos');

        }
    });


   
    
        
   



});