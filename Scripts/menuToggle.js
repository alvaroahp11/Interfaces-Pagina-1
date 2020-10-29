footer = function(){ 
    alto_main= $(window).height() - $('.footer').height() - $('.header').height();
    $('#main').css('min-height',alto_main + 'px') ; 
}



jQuery('document').ready(function($){
    var allMid = $('.mid')

    footer();
    $( window ).resize(function() {
        footer();
    });

    var menuBtn = $('#menu-icon');
    var menu = $('#menu');

    menuBtn.click(function(){
        menu.toggle(500);
    });

    var menuHIniBtn = $('#menuHIni');
    var iniciarSesionPrincipal = $('#iniContainer');

    menuHIniBtn.click(function(){
        allMid.hide();
        iniciarSesionPrincipal.show()
    });

    var iniRegBtn = $('#registraseBtn');
    var registrarsePrincipal = $('#registrarse');

    iniRegBtn.click(function(){
        allMid.hide();
        registrarsePrincipal.show();
    });


    // var notiEventBtn = $('.tablet-news');
    // var notiEventText = $('.tablet-news a')
    // var mainDisplay = $('.main');
    // var notiEventDisplay = $('.news');

    // notiEventBtn.click(function(){
    //     mainDisplay.toggle(100);
    //     notiEventDisplay.toggle(100);
    //     if (mainDisplay.css('display') == 'none' ){
    //         notiEventText.text('Temario');
    //     }else{
    //         notiEventText.text('Noticias/Eventos');

    //     }
    // });

    var sendBtn = $('.sendBtn');

    $(function(){
        $('#publicartema1').click(function(){
            var textarea = $('#textotema1').val();
            var template = $($('#agregar1').html());
            template.find('.texto').html(textarea);
            var $btext = $('#foro1');
            $btext.append(template);

        });
    });
    $(function(){
        $('#publicartema2').click(function(){
            var textarea = $('#textotema2').val();
            var template = $($('#agregar2').html());
            template.find('.texto').html(textarea);
            var $btext = $('#foro2');
            $btext.append(template);

        });
    });
    $(function(){
        $('#publicartema3').click(function(){
            var textarea = $('#textotema3').val();
            var template = $($('#agregar3').html());
            template.find('.texto').html(textarea);
            var $btext = $('#foro3');
            $btext.append(template);

        });
    });

    sendBtn.click(function(){ 
        var mailtext = $(this).parent().children('.correoAl').text();
        window.location.href = "mailto:" + mailtext + "?subject=Subject";
    });
   
    
        
   



});