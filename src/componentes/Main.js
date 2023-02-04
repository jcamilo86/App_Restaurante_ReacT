import React from 'react'
import TresCard from "./tresCard"
import Formulario from './Formulario';
import Baner from './Baner';
import Menu from './menu';
// import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <React.Fragment>
      <Menu/>
    
      <TresCard/>
    
      
      <Baner/>
     <Formulario/>
     </React.Fragment>
  )
}

export default Main
