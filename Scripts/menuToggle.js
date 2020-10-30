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

    function getUserFromSerializedArray(alldata){
        
        const user1 = new user(alldata[0].value, alldata[1].value, alldata[2].value, 
                                alldata[3].value, alldata[4].value, alldata[5].value, 
                                alldata[6].value, alldata[7].value, alldata[8].value, 
                                alldata[9].value, alldata[10].value, alldata[11].value
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

        get usuario (){
            return this.usuario;
        }
        get nia (){
            return this.nia;
        }
        get pass(){
            return this.pass
        }
        get name (){
            return this.name
        }
        get lastname (){
            return this.lastname
        }
        get email(){
            return this.email;
        }
        get fnacimiento(){
            return this.fnacimiento
        }
        get id(){
            return this.id
        }
        get rol(){
            return this.rol
        }
        get carrera(){
            return this.carrera
        }
        get idioma(){
            return this.idioma
        }
        get universidad(){
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
        var x = registrarseForm.serializeArray();
        var user1 = getUserFromSerializedArray(x);
        console.log(user1.toString());
      
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