import { Link, Outlet } from "react-router-dom";
import './root.css'

const Root = (props) => {
    return (
        <div className="menuBar">
        {/* Esto funciona porque esta el browser router en el index */}
            <nav>
                <Link to="/pokemon" className="links"> Pokemon </Link> 
                <Link to="/lista" className="links"> Lista </Link>
                <Link to="/historial" className="links"> Historial </Link> 
                <Link to="/combate" className="links"> Combate </Link>
                <br /> <br />
                <Outlet />
            </nav>


        </div>
    )
}

export default Root;