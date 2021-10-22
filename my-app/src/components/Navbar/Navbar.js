import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="nav-bar">
            <h4 className="nav-bar-element">Inicio</h4>
            <h4 className="nav-bar-element">Categorías</h4>
            <h4 className="nav-bar-element">Mis Compras</h4>
            <h4 className="nav-bar-element">Mi Perfil</h4>
            <h4 className="nav-bar-element login">Login</h4>
        </div>

    )
}

export default Navbar;