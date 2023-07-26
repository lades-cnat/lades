import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Admin/Login/Login';
import Home from './pages/Admin/Home/Home';
import Landpage from './pages/Landpage/Landpage';
import { useState } from "react";

function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landpage />} />
          <Route path="/adm" element={<Home />} />
          <Route path="/adm/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Rotas;