let autos = []


let formulario = () => {

    let marca = document.getElementById('marcaIngresada').value
    let modelo = document.getElementById('modeloIngresado').value
    let year = document.getElementById('anoIngresado').value

    

    let ver = Number.isInteger(year)

    //if corto
    !isNaN(year) ? console.log('ahora si') : console.log('aun no')



    let autoNuevo = {
        marca_obj : marca,
        modelo_obj : modelo,
        year_obj : year
    }

    autos.push(autoNuevo)

    console.log(autos)
    listar()

}




let listar = () => {

    let listando = document.getElementById('listContainer')

    let html = ""

    autos.forEach(auto => {

        html = html + "<li> " + auto.marca_obj + " " + auto.modelo_obj + " " + auto.year_obj + "<li>"

    });

    listando.innerHTML = html
}





let borrar = () => {

    console.log("a")

    document.getElementById('marcaIngresada').reset();


    // document.getElementById('modeloIngresado').innerHTML = ''
    // document.getElementById('anoIngresado').innerHTML = ''
}