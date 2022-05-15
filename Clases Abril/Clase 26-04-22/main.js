// alert("Hola mundo");
// console.log("Hello World");

// let variable = 45;
// const constante = 10;
// console.log(variable, constante);


function funcion(){

    let obj = document.getElementById("age").value;
    console.log(obj.value)

    // console.log(document.getElementById("age").value)
    

    if (obj <= 17){
        document.getElementById("textBox").innerHTML = "Es menor"
    }
    
    else if (obj >= 18) {
        document.getElementById("textBox").innerHTML = "Es mayor"
    }
    else if (obj == String){
        document.getElementById("textBox").innerHTML = "El valor ingresado no es valido"
    }

    else{
        document.getElementById("textBox").innerHTML = "Entra al else"
    }

    
}



