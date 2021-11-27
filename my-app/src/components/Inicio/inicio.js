import SubjectCards from "../SubjectCard";
import { useEffect, useState } from 'react'
import { httpGet } from "../../utils/httpFunctions";




const Inicio = () => {
  const [products, setProducts] = useState([])
  const [categories, setCategory] = useState('')


  const fetchProducts = () => {
    httpGet('api/product/')
      .then((res) => setProducts(res.data))
  }


  useEffect(fetchProducts, [])

  let finalSubjects;

  let category_filter = categories;

  if (category_filter != '') {
    finalSubjects = products.filter((subject) => {
      return subject.category == category_filter;
    })
  } else {
    finalSubjects = products;
  }


  return (
    <div>

      <div className="album py-5 bg-light">
        <div className="container">

          <div className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filtrar
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              {" "}
              <li>
                <button className="dropdown-item"
                  onClick={() => setCategory('')}
                >
                  Todos los productos
                </button>
              </li>
              {" "}
              <li>
                <button className="dropdown-item"
                  onClick={() => setCategory('electrodomestico')}
                >
                  Electrodomésticos
                </button>
              </li>

              {" "}
              <li>
                <button className="dropdown-item"
                  onClick={() => setCategory('mueble')}
                >
                  Muebles
                </button>
              </li>
              {" "}
              <li>
                <button className="dropdown-item"
                  onClick={() => setCategory('componente para pc')}
                >
                  Componentes para PC
                </button>
              </li>

            </ul>
          </div>

          <h4>Alguno de nuestros productos</h4>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
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
