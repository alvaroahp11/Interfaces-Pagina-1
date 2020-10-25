footer = function(){ 

    alto_navegador= $(window).height();
    alto_documento= $(document).height(); 
   
    if (alto_documento>alto_navegador){
        $('.footer').css({'position':"relative"});
          
    }
    else{
        $('.footer').css({'position':"fixed"});
        
    } 
}

togglePosition = function() {
    var x = window.matchMedia("(max-width: 600px)");
    if (x.matches && $('#iniciarSesion').css('display') != 'none') { // If media query matches 
        if ($('.footer').css('position') == 'relative'){
            $('.footer').css({'position':"fixed"});
            
        }else{
            $('.footer').css({'position':"relative"});
        }
    }
    x.addListener(myFunction)
    
}

jQuery('document').ready(function($){
    footer();
    var menuBtn = $('#menu-icon');
    var menu = $('#menu');

    menuBtn.click(function(){
        menu.toggle(500);
        togglePosition();
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