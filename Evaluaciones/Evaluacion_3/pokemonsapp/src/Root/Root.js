import { Link, Outlet } from "react-router-dom";
import './root.css'

const Root = (props) => {
    return (
        <div className="menuBar">
        {/* Esto funciona porque esta el browser router en el index */}
            <nav>
                <Link to="/pokemon"> Pokemon </Link> 
                <Link to="/lista"> Lista </Link>
                <Link to="/historial"> Historial </Link> 
                <Link to="/combate"> Combate </Link>
                <br /> <br />
                <Outlet />
            </nav>


        </div>
    )
}

export default Root;