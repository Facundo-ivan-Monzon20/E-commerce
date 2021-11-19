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

import AuthRoute from "./components/authRoute";

function App() {
  return (
    <Router>
      <div>
        <nav></nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          <Route path="/" exact={true}>
            <Navbar />
            <Inicio />
          </Route>
          <Route path="/inicio-sesion" exact={true}>
            <Inicio_sesion />
          </Route>
          <AuthRoute exact={true} path={`/perfil`}>
            <Perfil />
          </AuthRoute>

          <Route path="/registrarse" exact={true}>
            <Registrarse />
          </Route>

          <Route path="/">
            <Navbar />

            <Route path="/Navbar/Electrodomesticos" exact={true}>
              <Electrodomesticos />
            </Route>

            <Route path="/Navbar/Muebles" exact={true}>
              <Muebles />
            </Route>

            <Route path="/Navbar/Componentes" exact={true}>
              <Componentes />
            </Route>

            <AuthRoute path="/Navbar/Perfil" exact={true}>
              <Perfil />
            </AuthRoute>



          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
