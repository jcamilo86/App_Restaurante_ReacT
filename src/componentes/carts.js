import React from "react";
import "./imagenes/hoja-stilo/stilo.css"


const Card=({title, image,parrafo, precio})=>{
return( 
   <div className="Card">
<img src={ image }  alt=""/>
<div className="card-body">
<h4 className="cart-title">{title} </h4>
<p className="card-text text-segundari"> {parrafo} </p>
<p className="card-text text-tres"> {precio} </p>
<div className="comprar">
</div>


</div>

</div>
)

    
}
export default Card;