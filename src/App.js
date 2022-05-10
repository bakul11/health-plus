import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePages from "./Componets/HomePages/HomePages";
import Navbar from "./Componets/Shared/Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={ <HomePages></HomePages> }></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
