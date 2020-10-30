//fixed footer at the bottom
footer = function(){ 
    alto_main= $(window).height() - $('.footer').height() - $('.header').height();
    $('#main').css('min-height',alto_main + 'px') ; 
}

    //create cookie
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + "; SameSite=Lax; secure";       
    }

    //get cookie
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
    }
    
    //check
    function checkCookie(cname) {
        var user = getCookie(cname);
        if (user != "") {
          alert("Welcome again " + user);
        } else {
          user = prompt("Please enter your name:", "");
          if (user != "" && user != null) {
            setCookie("username", user, 365);
          }
        }
    }

    function getUserFromSerialize(alldata){
        alldata = decodeURIComponent(alldata);
        var datos = alldata.split('&');
        
        for(var i = 0; i < datos.length; i++) {
            var index = datos[i].indexOf('=');
            datos[i]= datos[i].substring(index+1);
        }

        const user1 = new user(datos[0], datos[1], datos[2], 
                            datos[3], datos[4], datos[5], 
                            datos[6], datos[7], datos[8], 
                            datos[9], datos[10], datos[11]
        );

        return user1;
    }

    class user{

        constructor(usuario, nia, pass, name, lastname, email, fnacimiento, id, rol, carrera, universidad, idioma){
            this.usuarios=usuario;
            this.nia = nia;
            this.pass = pass;
            this.name= name;
            this.lastname = lastname;
            this.email= email;
            this.fnacimiento = fnacimiento;
            this.id = id;
            this.rol = rol;
            this.carrera = carrera;
            this.idioma = idioma;
            this.universidad = universidad;
        }

        get getUsuario (){
            return this.usuario;
        }
        get getNia (){
            return this.nia;
        }
        get getPass(){
            return this.pass
        }
        get getName (){
            return this.name
        }
        get getLastname (){
            return this.lastname
        }
        get getEmail(){
            return this.email;
        }
        get getFnacimiento(){
            return this.fnacimiento
        }
        get getId(){
            return this.id
        }
        get getRol(){
            return this.rol
        }
        get getCarrera(){
            return this.carrera
        }
        get getIdioma(){
            return this.idioma
        }
        get getUniversidad(){
            return this.universidad 
        }
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

    var menuHInicioBtn = $('#menuHInicio');
    var inicioPrincipal = $('#inicio');

    menuHInicioBtn.click(function(){
        allMid.hide();
        inicioPrincipal.show();
    });

    var menuHIniBtn = $('#menuHIni');
    var iniciarSesionPrincipal = $('#iniContainer');

    menuHIniBtn.click(function(){
        allMid.hide();
        iniciarSesionPrincipal.show()
    });

    var menuHRegBtn = $('#menuHReg');
    var iniRegBtn = $('#registraseBtn');
    var registrarsePrincipal = $('#registrarse');

    menuHRegBtn.click(function(){
        allMid.hide();
        registrarsePrincipal.show();
    });

    iniRegBtn.click(function(){
        allMid.hide();
        registrarsePrincipal.show();
    });


    var registrarseForm = $('#registrarseForm');

    registrarseForm.submit(function (e) { 
        e.preventDefault();
        var x = registrarseForm.serialize();
        var user1 = getUserFromSerialize(x);
        console.log(user1.getPass);

        // var exist = getCookie(user1.email);
        // if(exist==""){
        //     setCookie(user1.email, user1, 30);
        // }
        // checkCookie(user1.getEmail);
        setCookie(user1.email, decodeURIComponent(x), 100);
        console.log(user1);

        console.log(getUserFromSerialize(getCookie(user1.email)));


     
    });



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