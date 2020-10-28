footer = function(){ 
    alto_main= $(window).height() - $('.footer').height() - $('.header').height();
    $('#main').css('min-height',alto_main + 'px') ; 
}



jQuery('document').ready(function($){
    footer();
    $( window ).resize(function() {
        footer();
    });

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