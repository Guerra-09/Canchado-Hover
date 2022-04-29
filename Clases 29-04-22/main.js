// alert("Hola mundo");
// console.log("Hello World");

// let variable = 45;
// const constante = 10;
// console.log(variable, constante);


function funcion(){

    let obj = document.getElementById("age").value;
    console.log(obj.value)

    let c = [1, 2, 3]
    let d = [4, 5 ,6]
    let e = [7, 8, 9]
    let arreglo = [c, d, e]

    //let arreglo = [1, 2, 3, 4, 5, 6, 7]
    // console.log(document.getElementById("age").value)
    

    if (obj <= 17){
        document.getElementById("textBox").innerHTML = "Es menor"
    }
    
    else if (obj >= 18) {
        document.getElementById("textBox").innerHTML = "Es mayor"
    }
    else if ( (typeof obj) == String){
        document.getElementById("textBox").innerHTML = "El valor ingresado no es valido"
        
    }


    else{
        document.getElementById("textBox").innerHTML = "Entra al else"
    }


    let genero = document.getElementById("genero")
    
    console.log("arreglo.length" + arreglo.length)

    for( x = 0; x < arreglo.length; x++){
        console.log(arreglo[x])
    }

    
}


function sex(operation){

    if (operation == 1){
        
        console.log("Es hombre")
    }

    else if (operation == 2){

        console.log("Es mujer")
    }

}