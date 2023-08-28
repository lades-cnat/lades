import React from "react";
import { Routes, Route } from 'react-router-dom';

import IntegrantesAdmin from './pagesAdmin/Integrantes/integrantes';
import CriarIntegrante from "./pagesAdmin/Integrantes/criarIntegrante";
import EditarIntegrante from "./pagesAdmin/Integrantes/editarIntegrante";
import PesquisasAdmin from './pagesAdmin/Pesquisas/pesquisas';
import CriarPesquisa from "./pagesAdmin/Pesquisas/criarPesquisa";
import EditarPesquisa from "./pagesAdmin/Pesquisas/editarPesquisa";
import ProjetosAdmin from './pagesAdmin/Projetos/projetos';
import CriarProjeto from "./pagesAdmin/Projetos/criarProjeto";
import EditarProjeto from "./pagesAdmin/Projetos/editarProjeto";
import Login from './pagesAdmin/Login/login'

const MyRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/integrantesAdmin" element={<IntegrantesAdmin />} />
                <Route path="/integrantesCriar" element={<CriarIntegrante  />} />
                <Route path="/integrantesEditar/:id" element={<EditarIntegrante />} />
                <Route path="/pesquisasAdmin" element={<PesquisasAdmin />} />
                <Route path="/pesquisasCriar" element={<CriarPesquisa />} />
                <Route path="/pesquisasEditar/:id" element={<EditarPesquisa />} />
                <Route path="/projetosAdmin" element={<ProjetosAdmin />} />
                <Route path="/projetosCriar" element={<CriarProjeto />} />
                <Route path="/projetosEditar/:id" element={<EditarProjeto />} />
            </Routes>
        </div>
    );
}

export default MyRoutes;
