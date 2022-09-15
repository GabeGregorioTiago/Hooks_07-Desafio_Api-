import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../Components/Home";
import Dogs from "../Components/Dogs";
import Cats from "../Components/Cats";
import CatsTwo from "../Components/Cats_Others"
import Header from "./Header";

export default function Router(){

    return(
          <BrowserRouter>
             
             <Header rota="Home" rota2="Doguinhos" rota3="Gatinhos" />
             <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dog" element={<Dogs/>}/>
                <Route path="/cat" element={<Cats/>}/>

             </Routes>
          
          </BrowserRouter>

    );
}