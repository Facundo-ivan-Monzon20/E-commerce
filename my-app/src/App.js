import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Inicio from "./components/Inicio/inicio";

import Navbar from "./components/Navbar/Navbar";

import Inicio_sesion from "./components/Inicio sesion/inicio-sesion";

import Registrarse from "./components/registrarse/registrarse";

import Muebles from "./components/Muebles/muebles";

import Electrodomesticos from "./components/Electrodomesticos/electrodomesticos";

import Componentes from "./components/ComponentesPc/componentesPc";

import Perfil from "./components/Perfil/perfil";



function App() {
  return (
    <Router>
      <div>
        <nav></nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact={true}>
            <Inicio_sesion />
          </Route>
          <Route path="/registrarse" exact={true}>
            <Registrarse />
          </Route>
          
          <Route path="/Navbar">
            <Navbar />
            <Route path="/Navbar/Inicio" exact={true}>
              <Inicio />
            </Route>

            <Route path="/Navbar/Electrodomesticos" exact={true}>
              <Electrodomesticos />
            </Route>

            <Route path="/Navbar/Muebles" exact={true}>
              <Muebles />
            </Route>

            <Route path="/Navbar/Componentes" exact={true}>
              <Componentes />
            </Route>


            <Route path="/Navbar/Perfil" exact={true}>
              <Perfil />
            </Route>

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
