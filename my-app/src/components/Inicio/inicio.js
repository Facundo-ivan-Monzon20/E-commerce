import { useState } from "react";
import SubjectCards from "../SubjectCard";

const Inicio = () => {

  const [categories, setCategorie] = useState('')

  const subjects = [
    { name: "Memoria Ram", categorie: "Componentes" },
    { name: "Silla", categorie: "Muebles" },
    { name: "Televisor", categorie: "Electrodomestico" },
    { name: "Disco Solido", categorie: "Componentes" },
    { name: "Mesa", categorie: "Muebles" },
  ];
  
  let finalSubjects;

  let categorie_dos = categories;

  if (categorie_dos != '') {
    finalSubjects = subjects.filter((subject) => {
      return subject.categorie === categorie_dos;
    })
  } else {
    finalSubjects = subjects;
  }


  return (
    <div>
      <div class="album py-5 bg-light">
        <div class="container">
          <h4>Alguno de nuestros productos!</h4>

          <div>
            <div class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Filtrar
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                {" "}
                <li>
                  <button class="dropdown-item"
                    onClick={() => setCategorie('')}
                  >
                    Todos los productos
                  </button>
                </li>
                {" "}
                <li>
                  <button class="dropdown-item"
                    onClick={() => setCategorie('Electrodomestico')}
                  >
                    Electrodomésticos
                  </button>
                </li>

                {" "}
                <li>
                  <button class="dropdown-item"
                    onClick={() => setCategorie('Muebles')}
                  >
                    Muebles
                  </button>
                </li>
                {" "}
                <li>
                  <button class="dropdown-item"
                    onClick={() => setCategorie('Componentes')}
                  >
                    Componentes para PC
                  </button>
                </li>

              </ul>
            </div>

          </div>

          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {

              finalSubjects.map((subjects) => {
                return <SubjectCards subject={subjects} />;
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
