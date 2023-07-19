import React from "react";
import { Routes, Route } from 'react-router-dom';

import IntegrantesAdmin from './pagesAdmin/Integrantes/integrantes';
import PesquisasAdmin from './pagesAdmin/Pesquisas/pesquisas';
import InicioAdmin from './pagesAdmin/Inicio/inicio';
import Login from './pagesAdmin/Login/login'

const MyRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/admin" element={<InicioAdmin />} />
                <Route path="/login" element={<Login />} />
                <Route path="/integrantesAdmin" element={<IntegrantesAdmin />} />
                <Route path="/pesquisasAdmin" element={<PesquisasAdmin />} />
            </Routes>
        </div>
    );
}

export default MyRoutes;
