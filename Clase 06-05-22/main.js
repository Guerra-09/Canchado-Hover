let funcion= () =>{
    //5>4? alert("Hola mundo"):alert('else')
    let arreglo = []
  

    for (let i = 0; i < 4; i++){        
        arreglo[i] = document.getElementById("num" + (i+1) ).value
    }

    for (let j = 0; j < 4; j++){
        window.setTimeout(function() {
            document.getElementById('p'+ j).innerHTML = arreglo[j]
        }, 2000)
    }

   
}


