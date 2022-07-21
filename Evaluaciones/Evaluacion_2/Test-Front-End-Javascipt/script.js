let pacientes = []
let doctor1 = 0
let doctor2 = 0


let guardar = () => {

    flag = 0

    nombre = document.getElementById("nombrePaciente").value
    primerApellido = document.getElementById("apellidoPPaciente").value
    segundoApellido = document.getElementById("apellidoMPaciente").value
    edad = document.getElementById("edadPaciente").value
    genero = document.getElementById("inputGroupSelect01").value //1 es hombre, 2 mujer
    doctores = document.getElementById("inputGroupSelect02").value //1 es juanito y 2 es pepito



    let avisador = []

    

    if (nombre == ""){
        
        avisador.push('falta el nombre')

    }else {
        flag += 1
        
    }






    if (primerApellido == ""){
        
        avisador.push('falta el apellido')

    }else {

        flag +=1
        
    }






    if (segundoApellido == ""){

        avisador.push('falta el segundo apellido')

    }else {

        flag+=1
    }

    if (edad == ""){
        
        avisador.push('falta la edad')

    }else {
        flag+=1
    }
    


    if (genero == "Seleccione Genero"){


        avisador.push('falta el genero')


    }else {
        

        flag+=1
    }




    if (doctores == "Seleccione Doctor"){
    
        avisador.push('falta el doctor')

    }else {
        flag+=1
    }



    


    if (flag < 6){

        alert(avisador)

    }else if (flag == 6){

        let paciente = {

            nombre_paciente : nombre,
            apellido_paciente : primerApellido,
            apellido2_paciente : segundoApellido,
            edad_paciente : edad,
            genero_paciente : genero,
            doctor_paciente : doctores
    

        };

        // document.getElementById("Form")

        
        

        if (doctor1 >= 2){

            alert("El doctor Juanito no puede recibir mas de dos pacientes")

        }else if (doctor2 >= 2) {

            alert("El doctor Pepito no puede recibir mas de dos pacientes")

        } else {

            if (doctores == "Juanito Perez"){
                doctor1+=1
            } else {
                doctor2+=1
            }

            

            console.log(doctor1, doctor2)

            pacientes.push(paciente)
            
            alert("Todo bien")
            html = document.getElementById("respuesta").value

            

            pacientes.forEach(element => {

                html = html + "<li>" + " " +  element.nombre_paciente + " " + element.apellido_paciente + " " + element.apellido2_paciente + " " + element.edad_paciente + " " + element.genero_paciente + " " + element.doctor_paciente + "</li>" 


            });

            document.getElementById('respuesta').innerHTML = html

        }

        


    }






}