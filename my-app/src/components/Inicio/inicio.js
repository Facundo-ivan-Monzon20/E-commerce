import SubjectCards from "../SubjectCard";

const Inicio = () => {
  const subjects = [
    { name: "Memoria Ram", categorie: "Componentes" },
    { name: "Silla", categorie: "Muebles" },
    { name: "Televisor", categorie: "Electrodomestico" },
    { name: "Disco Solido", categorie: "Componentes" },
    { name: "Mesa", categorie: "Muebles" },
  ];



  


  return (
    <div>
      <div class="album py-5 bg-light">
        <div class="container">
          <h4>Alguno de nuestros productos!</h4>

          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {
             
              subjects.map((subjects) => {
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
