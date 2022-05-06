let funcion= () =>{
    //5>4? alert("Hola mundo"):alert('else')
    let arreglo = []
  


    arreglo[0] = document.getElementById('num1').value
    arreglo[1] = document.getElementById('num2').value
    arreglo[2] = document.getElementById('num3').value
    arreglo[3] = document.getElementById('num4').value

    for (let i = 0; i < 4; i++){

        console.log(arreglo[i])
        arreglo[i] = document.getElementById('p1').innerHTML

    }

    document.getElementById('p'+ '1').innerHTML= arreglo[0]
}


