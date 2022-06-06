import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Login from "./Login";
import Cadastro from "./Cadastro";
import Subscriptions from "./Subscriptions";
import Id from "./Id"
import Home from "./Home"

//Importar componentes aqui

export default function App(){


    // parte lógica

    return(

        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>} />
                    <Route path="/sign-up" element={<Cadastro />} />
                    <Route path="subscriptions/" element={<Subscriptions />} />
                    <Route path="subscriptions/:ID_DO_PLANO" element={<Id />} />
                    <Route path="home" element={<Home />} />

                </Routes>
        </BrowserRouter>
    );
}