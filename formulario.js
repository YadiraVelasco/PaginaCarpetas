function validar(e) {
    
    
    var exCorreo= document.querySelector("#correo").value;
    var exPassword= document.querySelector("#password").value;
    
    var etiquetaCorreo1 = "daniela@correo.com";
    var etiquetaContraseña1 = "pollito";
    
    
    
    
    
    
    if(exCorreo=== etiquetaCorreo1 && exPassword=== etiquetaContraseña1){
       
        confirm("Bienvenido");
        
        
    }else {
        confirm("Contraseña incorrecta");
    }

}




    document.querySelector("#iniciar").addEventListener("click", validar);
