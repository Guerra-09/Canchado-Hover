import React, {useState} from "react"


function Test(props){
    const [contador, setContador] = useState(0)

    const handleClick = () => {
        setContador(contador + 1)
        console.log("Funciona")
    }

    const reset = () => {
        setContador(0)
    }

    return (
        <>
            <p>{contador}</p>
            <button onClick={handleClick} >Click me </button>
            <button onClick={reset}> reset </button>
        </>
    )
}


// class Test extends React.Component {

//     render(){
//         return (
//             <>
//                 <p></p>
//                 <button>click me</button>
//             </>
//         )
//     }

// }

export default Test;