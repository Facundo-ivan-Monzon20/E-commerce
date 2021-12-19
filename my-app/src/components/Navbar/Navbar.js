import { Link } from "react-router-dom";
import './Navbar.css';

import { useEffect, useState } from "react";
import { httpGetAuthorization } from "../../utils/httpFunctions";


const Navbar = () => {
  const [userData, setUserData] = useState({})

  useEffect(() => {
    httpGetAuthorization('api/me').then((res) => setUserData(res.data))
  }, [])

  return (
    <div>
      <nav class="navbar sticky-top navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand">
            ICON
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/">
                  <a class="nav-link" aria-current="page">
                    Inicio
                  </a>
                </Link>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorías
                </a>
                <ul class="dropdown-menu bg-white" aria-labelledby="navbarDropdown">
                  <Link to="/NavBar/Electrodomesticos">
                    <li>
                      <a class="dropdown-item">
                        Electrodomesticos
                      </a>
                    </li>
                  </Link>
                  <Link to="/NavBar/Muebles">

                    <li>
                      <a class="dropdown-item" >
                        Muebles
                      </a>
                    </li>
                  </Link>

                  <Link to="/NavBar/Componentes">

                    <li>
                      <a class="dropdown-item">
                        Componentes para PC
                      </a>
                    </li>
                  </Link>
                </ul>
              </li>

              <li class="nav-item">
                <Link to="/inicio-sesion">

                  <a class="nav-link" >
                    Iniciar sesión
                  </a>
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/registrarse">
                  <a class="nav-link" >
                    Registrarse
                  </a>
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/Navbar/Perfil">
                  <a class="nav-link" aria-current="page">
                    Mi Perfil
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to={`/Navbar/carrito/${userData.username}/${userData.id}`}>
                  <a class="nav-link" aria-current="page"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg> Mi Carrito
                  </a>
                </Link>
              </li>
            </ul>
            <div class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-light" type="submit">Search</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
