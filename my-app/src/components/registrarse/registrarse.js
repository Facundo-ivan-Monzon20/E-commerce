import "./registrarse.css";
import { useState } from "react";
import { httpPost } from "../../utils/httpFunctions";
import { useHistory } from "react-router-dom";

  

const Registrarse = () => {
  const [username, setUsername] = useState([]);
  const [first_name, setFirst_name] = useState([]);
  const [last_name, setLast_name] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const history = useHistory();

  const signUp = (e) => {
    e.preventDefault();
    httpPost("api/register/", {
      username: username,
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
    }).then(
      history.push('/inicio-sesion')
    );
  };

  return (
    <div>
      <form className="form" onSubmit={signUp}>
        <h1>Registrarse</h1>
        <div className="container">
          <div className="input-contenedor">
            <i className="fas fa-user"></i>
            <input
              className="input-login"
              type="text"
              name="user"
              placeholder="Nombre de Usuario"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-contenedor">
            <i className="fas fa-user"></i>
            <input
              className="input-login "
              type="text"
              name="user"
              placeholder="Nombre"
              required
              onChange={(e) => setFirst_name(e.target.value)}
            />
          </div>
          <div className="input-contenedor">
            <i className="fas fa-user"></i>
            <input
              className="input-login"
              type="text"
              name="user"
              placeholder="Apellido"
              required
              onChange={(e) => setLast_name(e.target.value)}
            />
          </div>

          <div className="input-contenedor">
            <i className="fas fa-envelope"></i>
            <input
              className="input-login"
              type="email"
              name="email"
              placeholder="Correo Electr??nico"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-contenedor">
            <i className="fas fa-lock"></i>
            <input
              className="input-login"
              type="password"
              name="password"
              placeholder="Contrase??a"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
            <button type="submit" className="inicio-btn">Registrarse</button>
          <p>
            <input className="checkbox" type="checkbox" required />
            Acepto los <a href="#">T??rminos y Condiciones</a> y autorizo el uso
            de mis datos de acuerdo a la{" "}
            <a href="#">Declaraci??n de Privacidad.</a>
          </p>
          <p>
            ??Ya est??s registrado? <a href="#">Click aqu??</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Registrarse;
