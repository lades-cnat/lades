import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Contato from './pages/contato'

export default () => {

    return (
        <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/contato" element={<Contato />} />
        </Routes>
    );
}