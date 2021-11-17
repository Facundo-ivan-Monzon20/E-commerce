import "./iniciar-sesion.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { httpPost } from "../../utils/httpFunctions";
import { useHistory } from "react-router-dom";
const Inicio_sesion = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const history = useHistory();

  const login = (e) => {
    e.preventDefault();
    httpPost("api/login/", {
      username: username,
      password: password,
    }).then((res) => {
      localStorage.setItem("token", res.data.access);
      history.push('/Navbar/Inicio')
    });
  };

  return (
    <div>
      <form className="form" onSubmit={login}>
        <h1>Iniciar Sesión</h1>
        <div className="container">
          <div className="input-contenedor">
            <i className="fas fa-user"></i>
            <input
              className="input-login"
              type="text"
              name="Email"
              placeholder="Nombre de Usuario"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-contenedor">
            <i className="fas fa-lock"></i>
            <input
              className="input-login"
              type="password"
              name="password"
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
      
            <button type="submit" className="inicio-btn">Iniciar Sesión</button>
         
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
