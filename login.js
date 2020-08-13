function validar(e) {
    
    
    var exCorreo= document.querySelector("#correo").value;
    var exPassword= document.querySelector("#password").value;
    
    var etiquetaCorreo1 = "gato@correo.com";
    var etiquetaContraseña1 = "A1234";
    
    
    
    
    
    
    if(exCorreo=== etiquetaCorreo1 && exPassword=== etiquetaContraseña1){
       
        confirm("Bienvenido");
        
        
    }else {
        confirm("Contraseña incorrecta");
    }

}




    document.querySelector("#iniciar").addEventListener("click", validar);

    
    
    
                                                     
    
    