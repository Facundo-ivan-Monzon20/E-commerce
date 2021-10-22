import "./registrarse.css";

import {
    Link
  } from "react-router-dom";

const Registrarse = () => {
    return (
        <div>
            <form class="form">

                <h1>Registrarse</h1>
                <div class="container">
                    <div class="input-contenedor">

                        <i class="fas fa-user"></i>
                        <input type="text" name="user" placeholder="Nombre Completo" required />
                    </div>

                    <div class="input-contenedor">
                        <i class="fas fa-envelope"></i>
                        <input type="email" name="email" placeholder="Correo Electrónico" required />

                    </div>

                    <div class="input-contenedor">

                        <i class="fas fa-lock"></i>
                        <input type="password" name="password" placeholder="Contraseña" required />
                    </div>
                   <Link to="/Navbar/Categorias" ><button class="inicio-btn">Registrarse</button></Link>

                    <p><input type="checkbox" required />Acepto los <a href="#">Términos y Condiciones</a> y autorizo el uso de mis datos de acuerdo a la <a href="#">Declaración de Privacidad.</a></p>
                    <p>¿Ya estás registrado? <a href="#">Click aquí</a></p>
                </div>
            </form>
        </div>
    )
}

export default Registrarse;