import React from 'react';

import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home';

import Tasks from './pages/Task';

const Routers: React.FC = () => {

    return (
        <Routes>
            <Route>

                <Route path="/" element={< Home />} />

                <Route path="/tarefas" element={< Tasks />} />

            </Route>
        </Routes>

    );

}

export default Routers