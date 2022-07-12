//import React, {useState} from "react"
import React from "react";


// function Test(props){
//     const [contador, setContador] = useState(0)
//                                     //hook

//     const handleClick = () => {
//         setContador(contador + 1)
//         console.log("Funciona")
//     }

//     const reset = () => {
//         setContador(0)
//     }

//     return (
//         <>
//             <p>{contador}</p>
//             <button onClick={handleClick} >Click me </button>
//             <button onClick={reset}> reset </button>
//         </>
//     )
// }


class Test extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            contador: 0,
            otraVariable: "cualquiercosa" 
        }
        //this.handleClick = this.handleClick.bind(this)
        //funcion flecha o esto
    }

    handleClick = () => { 
        //metodo 2
        this.setState({
            contador: this.state.contador + 1
        })
    }

    render(){
        return (
            <>
                <p>{this.state.contador}</p>
                <button onClick={this.handleClick}> click me </button>
            </>
        )
    }

}

export default Test;