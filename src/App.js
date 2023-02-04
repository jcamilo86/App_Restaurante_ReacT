import Menu from "./componentes/menu";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Main from "./componentes/Main";
import stilo from "./componentes/imagenes/hoja-stilo/stilo.css"

function App() {
  return (
   < React.Fragment>
    <Routes>
    <Route path="/" element={ <Main/>}/>

    </Routes>

   </React.Fragment>

  );
}

export default App;
