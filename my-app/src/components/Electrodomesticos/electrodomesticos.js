import { useState } from "react";

import SubjectCards from "../SubjectCard";

const Electrodomesticos = () => {
  const [filtered] = useState(true);

  const subjects = [
    { name: "Memoria Ram", categorie: "Componentes" },
    { name: "Silla", categorie: "Muebles" },
    { name: "Televisor", categorie: "Electrodomestico" },
    { name: "Disco Solido", categorie: "Componentes" },
    { name: "Mesa", categorie: "Muebles" },
  ];


     
   

      let finalSubjects = [];

      
      if (filtered) {
          finalSubjects = subjects.filter((subject) => {
              return subject.categorie === "Electrodomestico";
          });
      } else {
          finalSubjects = subjects;
      }
    

  return (
    <div>
      

     

      <div className="album py-5 bg-light">
        <div className="container">
          <h4>Productos de la categoría Electrodomesticos</h4>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
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

export default Electrodomesticos;