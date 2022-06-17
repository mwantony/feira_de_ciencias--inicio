import Ferramenta from "pages/Ferramentas";
import Inicio from "pages/Inicio";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "./components/Cabecalho";
export default function AppRouter() {
  const [selecionado, setSelecionado] = useState(0);
  return(
    <BrowserRouter>
      <Cabecalho selecionado={selecionado} setSelecionado={setSelecionado}></Cabecalho>
      <Routes>
        <Route path="/" element={<Inicio></Inicio>}></Route>
        <Route path="/downloads/" element={<Ferramenta></Ferramenta>}></Route>
      </Routes>
    </BrowserRouter>
  )
}