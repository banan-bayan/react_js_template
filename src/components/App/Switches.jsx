import React from "react";
import { Route, Routes } from "react-router-dom";
import { Greetings } from "../../Shared/Greetings/Greetings";

export const Switches = () => {
 return (
  <Routes>
    <Route path='/' element={<Greetings/>}/>
    <Route path='*' element={<h1 style={{background: 'red', fontSize: '25px'}}>404 not found</h1>}/>
  </Routes>
 )
}