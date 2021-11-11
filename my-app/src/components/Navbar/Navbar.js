import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
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
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/Navbar/Inicio">
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
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/NavBar/Electrodomesticos">
                  {" "}
                  <li>
                    <a class="dropdown-item">
                      Electrodomesticos
                    </a>
                  </li>
                </Link>
                <Link to="/NavBar/Muebles">
                  {" "}
                  <li>
                    <a class="dropdown-item" >
                      Muebles
                    </a>
                  </li>
                </Link>

                <Link to="/NavBar/Componentes">
                  {" "}
                  <li>
                    <a class="dropdown-item">
                      Componentes para PC
                    </a>
                  </li>
                </Link>
              </ul>
            </li>

            <li class="nav-item">
              <Link to="/">
                {" "}
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
          </ul>
           <div class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-light" type="submit">Search</button>
        </div>  
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
