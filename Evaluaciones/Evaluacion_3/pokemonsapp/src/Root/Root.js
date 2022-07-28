import { Link, Outlet } from "react-router-dom";
import './root.css'
import Buscador from "../menuInicial/Pokemon/Pokemon";

const Root = (props) => {
    return (

        <div className="menuBar">
        {/* Esto funciona porque esta el browser router en el index */}
            <nav>
                <div className="autlet">

                    <Link to="/inicio" className="links"> Inicio </Link> 
                    <Link to="/pokemon" className="links"> Pokemon </Link> 
                    <Link to="/lista" className="links"> Lista </Link>
                    <Link to="/historial" className="links"> Historial </Link> 
                    <Link to="/combate" className="links"> Combate </Link>
                    <br /> <br />
                    <Outlet />
                </div>
            </nav>    
        </div>

        
    )
}

export default Root;