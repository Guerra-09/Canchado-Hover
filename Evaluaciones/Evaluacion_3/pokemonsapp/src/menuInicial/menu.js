import React from "react";
import Pokemon from "./Buscador/buscador";
import Historial from "./Historial/historial";




class Menu extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

            //1. Array con las busquedas realizadas
            pokemonSearch: ["lucario"]
            
        }
    }

    

    render() {
        
        return (
            <div>

                <Pokemon />
                <Historial pokemonLastSearch={this.state.pokemonSearch} />

            </div>
        )

    }

}


export default Menu;