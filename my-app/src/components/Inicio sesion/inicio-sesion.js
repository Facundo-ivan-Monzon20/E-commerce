import "./iniciar-sesion.css";
import { Link } from "react-router-dom";

const Inicio_sesion = () => {
  return (
    <div>
      <form className="form">
        <h1>Iniciar Sesión</h1>
        <div className="container">
          <div className="input-contenedor">
            <i className="fas fa-envelope"></i>
            <input type="email" name="Email" placeholder="Correo Electrónico" />
          </div>

          <div className="input-contenedor">
            <i className="fas fa-lock"></i>
            <input type="password" name="password" placeholder="Contraseña" />
          </div>
          <Link to="/Navbar/Inicio">
            <button className="inicio-btn">Iniciar Sesión</button>
          </Link>
          <Link to="registrarse">
            <button className="crear-btn">Crear cuenta</button>
          </Link>
          <p>
            ¿Olvidaste tu contraseña? <a href="#">Click aquí</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Inicio_sesion;
