import React from 'react';
import {useState} from 'react';
import "./imagenes/hoja-stilo/stilo.css"




function Formulario() {
 
  const [nombre, setNombre]=useState();

   const guadarNombre=(e)=>{
     const value = e.target.value;
    //  console.log(value);
     setNombre(value)

   }
   const [email, setEmail]=useState();

   const guarEmail=(e)=>{
     const value = e.target.value;
    //  console.log(value);
    setEmail(value)

     }
     const [solicitud, setSolicitud]=useState();

     const guarSolicitud=(e)=>{
       const value = e.target.value;
      //  console.log(value);
      setSolicitud(value)
  
       }

   const guardarClick=()=>{
    console.log( nombre,email,solicitud)
  }
 

  return (
    
    <div className='contendor-fomulario'>
 
 
    <div className='foruluario-datos'>
    <h2 className='color'>Contacto</h2>
    <br/>
    <h3 className='color'> Formulario de Reservas</h3>
    <label className='color'>Nombre:</label> 
<br/>
    <input id="nombre" name="nombre" value={nombre} onChange={guadarNombre}></input>

<div>

<label color className='color'>Email:</label>
<br/>
<input id="email" name="email" value={email} onChange={guarEmail}></input>
<br/>
<br/>

<label className='color'>Mensaje:</label>
<br/>
<textarea name="detalle" id="solicitud" cols="30" rows="10" 
placeholder="tipo de solicitud" value={solicitud} onChange={guarSolicitud}></textarea>
</div>


<br/>
    <button className='btn' onClick={guardarClick}> Enviar</button>
    </div>

<div className='contacto'>
<br/>
<br/>

<h4 color>Contacta con nosotros</h4>
<br/>
<h4 className='color'>Telefono:</h4>
<p className='color'> +38056-453</p>
<p className='color'>+38056-773</p>
<br/>
<h4 className='color'>Email:</h4>
<p>restaureterico@gamil.com</p>

</div>



    </div>
    

  )
}

export default Formulario

