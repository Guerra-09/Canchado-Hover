import React from "react";
import Pokemon from "./Buscador/buscador";
import Historial from "./Historial/historial";




class Menu extends React.Component {

    render() {
        
        return (
            <div>

                <Pokemon />
                <Historial />

            </div>
        )

    }

}

export default Menu;