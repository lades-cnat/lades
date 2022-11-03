import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Contato from './pages/contato'

export default () => {

    return (
        <Routes>
                <Route exact path="/lades" element={<Home />} />
                <Route exact path="/lades/contato" element={<Contato />} />
        </Routes>
    );
}