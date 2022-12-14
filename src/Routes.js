import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Contato from './pages/Contato'
import Sobre from './pages/Sobre'
import Pesquisadores from './pages/Pesquisadores'
import Pesquisa from './pages/Pesquisa'
import Biblioteca from './pages/Biblioteca'

export default () => {

    return (
        <div>
        <Routes>

                <Route exact path="/" element={<Home />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/pesquisadores" element={<Pesquisadores />} />
                <Route path="/pesquisa" element={<Pesquisa />} />
                <Route path="/biblioteca" element={<Biblioteca />} />
        </Routes>
        </div>
        
    );
}