import "./Navbar.css"
import {
    Link
  } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="nav-bar">
            <Link to="/Navbar/Categorias"><h4 className="nav-bar-element">Inicio</h4></Link>
            <Link to="/Navbar/Categorias"><h4 className="nav-bar-element">Categorías</h4></Link>
            <Link tp="/"><h4 className="nav-bar-element">Mis Compras</h4></Link>
            <Link to="/"><h4 className="nav-bar-element">Mi Perfil</h4></Link>
            <Link to="/"><h4 className="nav-bar-element login">Login</h4></Link>
        </div>

    )
}

export default Navbar;