import React from "react";
import "./imagenes/hoja-stilo/stilo.css"



const Menu=()=>{
    return(
        
        <div className="contenedor-imagen">

      <div className="menu">
        
        <p>Inicio</p>
        <p>Nosotros</p>
        <p>Carta</p>
        <p>Blog</p>
        <p className="bt">Contacto</p>
        </div>


        <div className="contenedor-arepa">
        <img
        className="imagen-menu"
        src={require("./imagenes/baner.png")}
        alt="foto de comidas "/>

           </div>
        </div>

    )
}
 
 
export default Menu;