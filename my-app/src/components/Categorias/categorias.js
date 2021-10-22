import "./categorias.css";

import { useState } from "react";

import SubjectCards from "../SubjectCard";

const Categorias = () => {
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
            return subject.categorie === "componentes";
        });
    } else {
        finalSubjects = subjects;
    }


    return (
        <div>
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
                                <SubjectCards subject={subjects} />
                            )
                        })

                    }
                </div>
            </div>
        </div>
    )
}

export default Categorias;