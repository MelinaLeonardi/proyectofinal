function valida_envia(){
    //valido el nombre
    if (document.fvalida.nombre.value.length==0){
           alert("Tiene que escribir su nombre")
           document.fvalida.nombre.focus()
           return 0;
    }
    //valido apellido
    if (document.fvalida.apellido.value.length==0){
        alert("Tiene que escribir su apellido")
        document.fvalida.apellido.focus()
        return 0;
 }
    //valido la edad
    edad = document.fvalida.edad.value
    edad = validarEntero(edad)
    document.fvalida.edad.value=edad
    if (edad==""){
           alert("Tiene que introducir un número entero en su edad.")
           document.fvalida.edad.focus()
           return 0;
    }
    else{
           if (edad<18){
                  alert("Debe ser mayor de 18 años.")
                  document.fvalida.edad.focus()
                  return 0;
           }
    }
 
    //valido el sexo
    if (document.fvalida.sexo.selectedIndex==0){
           alert("Debe seleccionar un sexo.")
           document.fvalida.sexo.focus()
           return 0;
    }
 else {
    //el formulario se envia
    alert("Muchas gracias por enviar el formulario");
    document.fvalida.submit();
}
}