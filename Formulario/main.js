let verFecha = (fecha) =>{

    let gD = fecha

    let dateGiven = gD.split('-');

    let dateAct = new Date();
    let aDay = dateAct.getDate();
    let aMonth = dateAct.getMonth()+1;
    let aYear = dateAct.getFullYear();

    console.log(dateGiven[0])

  



}

let verData = () =>{   
    infoData = []

    for (let i = 0; i < 5; i++){

        infoData.push(document.getElementById('form'+ i).value)

        if (infoData[i] == ''){
            alert('campos vacios!')
            break
        }

    }   
    
    for (var e = 0; e< infoData[3].length; e++) {
        var caracter = infoData[3].charAt(e);
        if( caracter == "@") {
            console.log("@ esta presente");
           
        } else {
            console.log("@ no esta presente");
        }
    }

    verFecha(infoData[2])
}


