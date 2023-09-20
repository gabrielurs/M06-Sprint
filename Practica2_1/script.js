var user;
var password;
var nom;
var cognom;
var edat;
var correcto = false;



$(document).ready(function(){
    $("#SignUp").click(function(){
        $(".error").remove();
         user = $('#nombreUsuario').val();
         password = $('#password').val();
         if(user == ""){$('#nombreUsuario').after('<span class="error">Enter a valid username</span>'); correcto = false;}else{correcto = true;}
         if(password == ""){$('#password').after('<span class="error">Enter a valid password</span>'); correcto = false;}else{correcto = true;}
     
         if(correcto == true){
            $("#c1").hide();
            $("#c2").show();    
         }
    });
  });



$(document).ready(function(){
    $("#Next").click(function(){
      nom = $('#nom').val();
      cognom = $('#cognom').val();
      edat = $('#edat').val();
      email = $('#email').val();

      if(nom == ""){$('#nom').after('<span class="error">Enter a valid nom</span>'); correcto = false;}else{correcto = true;}
      if(cognom == ""){$('#cognom').after('<span class="error">Enter a valid cognom</span>'); correcto = false;}else{correcto = true;}
      if(edat == ""){$('#edat').after('<span class="error">Enter a valid edat</span>'); correcto = false;}else{correcto = true;}
      if(email == ""){$('#email').after('<span class="error">Enter a valid email</span>'); correcto = false;}else{correcto = true;}
        

      if(correcto == true){
        $("#c2").hide();
        $("#c3").show();  

        $('#nomc3').after(nom);
        $('#cognomc3').after(cognom);
        $('#emailc3').after(email);
        $('#edatc3').after(edat);
     } 
    });
  });

  

  