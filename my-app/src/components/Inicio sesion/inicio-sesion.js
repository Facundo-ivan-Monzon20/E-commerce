import "./iniciar-sesion.css";


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
                    <button class="inicio-btn">Iniciar Sesión</button>
                    <button class="crear-btn">Crear cuenta</button>
                    <p>¿Olvidaste tu contraseña? <a href="#">Click aquí</a></p>
                </div>
            </form>
        </div>
    )
}

export default Inicio_sesion;