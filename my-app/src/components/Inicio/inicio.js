import SubjectCards from "../SubjectCard";
import {useEffect, useState} from 'react'
import { httpGet } from "../../utils/httpFunctions";




const Inicio = () => {
  const [products, setProducts] = useState([])
  const [categories, setCategorie] = useState('')


  const fetchProducts = () => {
    httpGet('api/product/')
    .then((res) => setProducts(res.data))
  }

  
  useEffect(fetchProducts, [])
  
  let finalSubjects;

  let categorie_dos = categories;

  if (categorie_dos != '') {
    finalSubjects = products.filter((subject) => {
      return subject.categorie === categorie_dos;
    })
  } else {
    finalSubjects = products;
  }


  return (
    <div>

      <div class="album py-5 bg-light">
        <div class="container">

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
        
          <h4>Alguno de nuestros productos!</h4>

          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {
             
              finalSubjects
              .map((subjects) => {
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
