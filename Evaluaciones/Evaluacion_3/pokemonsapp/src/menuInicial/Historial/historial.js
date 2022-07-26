import Buscador from "../Buscador/buscador";


function Historial(props) {
    
    const busq = document.getElementById("busquedas")

    return (
        <>
            <p> {props.historialBusquedas} </p>

        </>
    );
}



export default Historial;