let verData = () =>{   

    


    if (document.getElementById('form_nombre').value == ''){

        confirmation = false

        document.getElementById('campo_nombre').innerHTML = 'Este campo no puede estar vacio'
        document.getElementById('campo_nombre').classList.add('invalidText')

        document.getElementById('form_nombre').classList.add('invalidBorder')
    }else{ 

        confirmation = true

        document.getElementById('campo_nombre').innerHTML = 'Nombre aceptado'
        document.getElementById('campo_nombre').classList.remove('invalidText')
        document.getElementById('campo_nombre').classList.add('validText')

        document.getElementById('form_nombre').classList.remove('invalidBorder')
        document.getElementById('form_nombre').classList.add('validBorder')
    }



    if (document.getElementById('form_apellido').value == ''){

        confirmation2 = false
        document.getElementById('campo_apellido').innerHTML = 'Este campo no puede estar vacio'
        document.getElementById('campo_apellido').classList.add('invalidText')
        document.getElementById('form_apellido').classList.add('invalidBorder')
    }else{

        confirmation2 = true
        document.getElementById('campo_apellido').innerHTML = 'Apellido aceptado'
        document.getElementById('campo_apellido').classList.remove('invalidText')
        document.getElementById('campo_apellido').classList.add('validText')
        document.getElementById('form_apellido').classList.remove('invalidBorder')
        document.getElementById('form_apellido').classList.add('validBorder')
    }



    if (document.getElementById('form_fecha').value == ''){

        confirmation3 = false

        document.getElementById('campo_fecha').innerHTML = 'Este campo no puede estar vacio'
        document.getElementById('campo_fecha').classList.add('invalidText')
        document.getElementById('form_fecha').classList.add('invalidBorder')

    }else{

        confirmation3 = true

        document.getElementById('campo_fecha').innerHTML = 'Fecha aceptada'
        document.getElementById('campo_fecha').classList.remove('invalidText')
        document.getElementById('campo_fecha').classList.add('validText')
        document.getElementById('form_fecha').classList.remove('invalidBorder')
        document.getElementById('form_fecha').classList.add('validBorder')
    }


    
    let validationEmail = ValidateEmail()
    
    console.log(validationEmail)

    if (document.getElementById('form_correo').value == ''){

        confirmation4 = false
        

        document.getElementById('campo_correo').innerHTML = 'Este campo no puede estar vacio'
        document.getElementById('campo_correo').classList.add('invalidText')

        document.getElementById('form_correo').classList.add('invalidBorder')

    }else if (validationEmail == true){

        confirmation4 = true

        document.getElementById('campo_correo').innerHTML = 'Correo aceptado'
        document.getElementById('campo_correo').classList.remove('invalidText')
        document.getElementById('campo_correo').classList.add('validText')

        document.getElementById('form_correo').classList.remove('invalidBorder')
        document.getElementById('form_correo').classList.add('validBorder')

    }

    else{
        
        confirmation4 = false

        document.getElementById('campo_correo').innerHTML = 'El correo debe ser valido'
        document.getElementById('campo_correo').classList.add('invalidText')

        document.getElementById('form_correo').classList.add('invalidBorder')
        
    }







    if (document.getElementById('form_form').value == ''){

        confirmation5 = false

        document.getElementById('campo_form').innerHTML = 'Este campo no puede estar vacio'
        document.getElementById('campo_form').classList.add('invalidText')

        document.getElementById('form_form').classList.add('invalidBorder')
    }else{

        confirmation5 = true

        document.getElementById('campo_form').innerHTML = 'Formulario aceptado'
        document.getElementById('campo_form').classList.remove('invalidText')
        document.getElementById('campo_form').classList.add('validText')
        document.getElementById('form_form').classList.remove('invalidBorder')
        document.getElementById('form_form').classList.add('validBorder')
    }







    //Genero Validator.



    //genero validator 2
    if (document.getElementById('selects').value == 'Genero'){

        confirmation6 = false
        document.getElementById('genero').innerHTML = 'Este campo no puede estar vacio'
        document.getElementById('selects').classList.add('invalidText')
        document.getElementById('selects').classList.add('invalidBorder')
    }
    else{

        confirmation6 = true
        document.getElementById('genero').innerHTML = 'Genero aceptado'
        document.getElementById('genero').classList.remove('invalidText')
        document.getElementById('genero').classList.add('validText')
        document.getElementById('selects').classList.remove('invalidBorder')
        document.getElementById('selects').classList.add('validBorder')
    }



    if (confirmation && confirmation2 && confirmation3 && confirmation4 && confirmation5 && confirmation6 == true){
        clases()
        
    }
    

}





function ValidateEmail(){

    let text = document.getElementById('form_correo').value
    
    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let result = pattern.test(text)
    
    return result
}



var arreglo = []


let clases =() => {

    let elemento_nombre = document.getElementById("form_nombre")
    let elemento_apellido = document.getElementById("form_apellido")
    let elemento_correo = document.getElementById("form_correo")
    let elemento_fecha = document.getElementById("form_fecha")
    let elemento_genero = document.getElementById("selects")
    let elemento_mensaje = document.getElementById("form_form")

    /*Forma 1
    
    let variable = new Object;
    variable.nombre = elemento_nombre.value,
    variable.apellido = elemento_apellido.value,... [etc]
    
    */


    

    //Forma 2
    let variable = {
        nombre: elemento_nombre.value,
        apellido: elemento_apellido.value,
        fechaNacimiento: elemento_fecha.value,
        correoPersona: elemento_correo.value,
        genero: elemento_genero.value,
        mensajePersona: elemento_mensaje.value
    }

    arreglo.push(variable)
    listar()


}

let listar = () => {
    console.log(arreglo)
}