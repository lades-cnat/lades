import React from "react";
<<<<<<< HEAD
import { HashRouter, Routes, Route } from 'react-router-dom';
=======
import { Routes, Route, HashRouter } from 'react-router-dom';
>>>>>>> 35a99814d629d18cd410f8bde5db9e4b0d00d84e

import Home from './pages/Home'
import Contato from './pages/Contato'

export default () => {

    return (
        <div>
        <Routes>
<<<<<<< HEAD
                <Route exact path="/" element={<Home />} />
                <Route path="/contato" element={<Contato />} />
=======
                <Route path="/lades" exact element={<Home />} />
                <Route path="/lades/contato" exact element={<Contato />} />
>>>>>>> 35a99814d629d18cd410f8bde5db9e4b0d00d84e
        </Routes>
        </div>
        
    );
}