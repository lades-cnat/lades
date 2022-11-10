import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Contato from './pages/Contato'

export default () => {

    return (
        <div>
        <Routes>

                <Route exact path="/" element={<Home />} />
                <Route path="/contato" element={<Contato />} />
        </Routes>
        </div>
        
    );
}