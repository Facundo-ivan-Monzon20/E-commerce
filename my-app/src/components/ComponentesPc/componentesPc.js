import SubjectCards from "../SubjectCard";
import {useEffect, useState} from 'react'
import { httpGet } from "../../utils/httpFunctions";




const Componentes = () => {
  const [products, setProducts] = useState([])
  const [categories] = useState(true)


  const fetchProducts = () => {
    httpGet('api/product/')
    .then((res) => setProducts(res.data))
  }

  
  useEffect(fetchProducts, [])
  
  let finalSubjects;

  if (categories) {
    finalSubjects = products.filter((subject) => {
      return subject.category === "componente para pc";
    })
  } else {
    finalSubjects = [];
  }


  return (
    <div>
      <div className="album py-5 bg-light">
        <div className="container">
          <h4>Productos de la categoría Componentes para PC</h4>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {
            finalSubjects.map((subjects) => {
              return <SubjectCards subject={subjects} />;
            }
            )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Componentes;
