import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <div classNameName="App">
      <div className="nav-bar">
        <h4 className="nav-bar-element">Inicio</h4>
        <h4 className="nav-bar-element">Categorías</h4>
        <h4 className="nav-bar-element">Mis Compras</h4>
        <h4 className="nav-bar-element">Mi Perfil</h4>
        <h4 className="nav-bar-element login">Login</h4>
      </div>
    </div>

  );
};

export default App;
