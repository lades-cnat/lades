import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Contato from './pages/contato'

export default () => {

    return (
        <Routes>
                <Route path="/lades" exact element={<Home />} />
                <Route path="/lades/contato" exact element={<Contato />} />
        </Routes>
    );
}