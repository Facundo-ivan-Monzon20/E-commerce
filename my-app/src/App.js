import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Categorias from "./components/Categorias/categorias";

import Navbar from "./components/Navbar/Navbar"

import Inicio_sesion from "./components/Inicio sesion/inicio-sesion"

import Registrarse from "./components/registrarse/registrarse"

function App() {

  return (
    <Router>
      <div>
        <nav>
         
        </nav>

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
            <Route path="/Navbar/Categorias" exact={true}>
            <Categorias />
          </Route>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
