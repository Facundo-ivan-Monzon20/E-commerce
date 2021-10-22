import "./iniciar-sesion.css";
import {
    Link
  } from "react-router-dom";

const Inicio_sesion = () => {
    return (
        <div>

            <form class="form">
                <h1>Iniciar Sesión</h1>
                <div class="container">

                    <div class="input-contenedor">
                        <i class="fas fa-envelope"></i>
                        <input type="email" name="Email" placeholder="Correo Electrónico" />

                    </div>

                    <div class="input-contenedor">

                        <i class="fas fa-lock"></i>
                        <input type="password" name="password" placeholder="Contraseña" />
                    </div>
                    <Link to="/Navbar/Categorias"><button class="inicio-btn">Iniciar Sesión</button></Link>
                   <Link to="registrarse"><button class="crear-btn">Crear cuenta</button></Link>
                    <p>¿Olvidaste tu contraseña? <a href="#">Click aquí</a></p>
                </div>
            </form>
        </div>
    )
}

export default Inicio_sesion;