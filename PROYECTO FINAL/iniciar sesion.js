var attempt = 3; // Variable contador de intentos.



function validate(){
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;



if(email=="")
    alert("Por favor, ingresa un nombre")
    
    if(password=="")
    alert("Por favor, ingresa un email")

        

if ( email == "juanes1115@gmail.com" && password == "1234"){
alert ("INGRESO EXITOSO");
window.location = "inicio.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// decrementa el contador.
alert("Lo siento le quedan "+attempt+" intentos;");
// deshabilita cuando cumpla tres intentos es decir llegue a cero opciones
if( attempt == 0){
document.getElementById("email").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}