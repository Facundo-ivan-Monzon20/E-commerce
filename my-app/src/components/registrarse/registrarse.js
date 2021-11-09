import "./registrarse.css"
import { Link } from "react-router-dom";

const Registrarse = () => {
  return (
    <div>
      <form className="form">
        <h1>Registrarse</h1>
        <div className="container">
          <div className="input-contenedor">
            <i className="fas fa-user"></i>
            <input
            className="input-login"
              type="text"
              name="user"
              placeholder="Nombre Completo"
              required
            />
          </div>

          <div className="input-contenedor">
            <i className="fas fa-envelope"></i>
            <input
            className="input-login"
              type="email"
              name="email"
              placeholder="Correo Electrónico"
              required
            />
          </div>

          <div className="input-contenedor">
            <i className="fas fa-lock"></i>
            <input
            className="input-login"
              type="password"
              name="password"
              placeholder="Contraseña"
              required
            />
          </div>
          <Link to="/Navbar/Inicio">
            <button className="inicio-btn">Registrarse</button>
          </Link>

          <p>
            <input className="checkbox" type="checkbox" required />
            Acepto los <a href="#">Términos y Condiciones</a> y autorizo el uso
            de mis datos de acuerdo a la{" "}
            <a href="#">Declaración de Privacidad.</a>
          </p>
          <p>
            ¿Ya estás registrado? <a href="#">Click aquí</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Registrarse;
