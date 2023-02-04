import React from "react";
import Card from "./carts";
import carne from "../componentes/imagenes/carne.jpg";
import ensaladas from "../componentes/imagenes/ensaladas.jpg";
import pasta from "../componentes/imagenes/pastas.jpg";

const card = [
  {
    id: 1,
    title: "Carne asada",
    image: carne,
    parrafo:"rica",
    precio:"$42.000"
  },
  {
    id: 2,
    title: "tabla de ensaldas",
    image: ensaladas,
    parrafo:"saludable",
    precio:"$23.000"
  },
  {
    id: 3,
    title: "Pastas",
    image: pasta,
    parrafo:"deliciosa",
    precio:"$33.000"

  },
];

const TresCard = () => {
  return (
    <div className="container ">
      <div className="row">
        {card.map((card) => (
          <div className="col-md-4" key={card.id }>
            <Card title={card.title} image={card.image} parrafo={card.parrafo} precio={card.precio} />
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default TresCard;
