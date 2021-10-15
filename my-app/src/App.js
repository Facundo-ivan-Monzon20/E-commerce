import "./App.css";
import { useState } from "react";
import SubjectCards from "./components/SubjectCard";

function App() {
  const [filtered, setFiltered] = useState(false);

  const subjects = [
    { name: "Memoria Ram", categorie: "Componentes" },
    { name: "Silla", categorie: "Muebles" },
    { name: "Televisor", categorie: "Electrodomestico" },
    { name: "Disco Solido", categorie: "Componentes" },
  ];

  const clickFunction = () => {
    setFiltered(!filtered);
  };

  const getName = () => {
    return filtered
      ? "Dejar de filtrar Componentes PC"
      : "Filtrar Componentes PC";
  };

  let finalSubjects = [];


  if (filtered) {
    finalSubjects = subjects.filter((subject) => {
      return subject.categorie == "Componentes";
    });
  } else {
    finalSubjects = subjects;
  }





  return (
    <div classNameName="App">
      <div className="nav-bar">
        <h4 className="nav-bar-element">Inicio</h4>
        <h4 className="nav-bar-element">Categorías</h4>
        <h4 className="nav-bar-element">Mis Compras</h4>
        <h4 className="nav-bar-element">Mi Perfil</h4>
        <h4 className="nav-bar-element login">Login</h4>
      </div>

      <header className="header">
        <h1>Bienvenido a E-Commerce</h1>
        <h3>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
          consectetur hic quis.
        </h3>
      </header>

      <div className="categorias">
        <p className="categorias-text">Categorías</p>

        <div className="filtros">
        <button className="filter-btn" onClick={clickFunction}>{getName()}</button>
          
        </div>
        <div className="categorias-card">
          {
          finalSubjects.map((subjects) => {
            return (
              <SubjectCards subject={subjects}/>
            )
          })
          
          }
        </div>
      </div>
    </div>
  );
}

export default App;
