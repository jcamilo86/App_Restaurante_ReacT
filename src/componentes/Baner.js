import React from "react";
import "./imagenes/hoja-stilo/stilo.css";

function Baner() {
  return (

    
     <section className="BBaneer">
       <h1>Nostros </h1>
       <div className="contenendor-para_baner">
         <img
         alt=""
           className="contendor-imagen"
           src={require("./imagenes/Parar_BBaner.png")}
         />
       </div>
     </section>
  )
}

export default Baner;
