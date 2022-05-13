import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppointmentPages from "./Componets/AppointmentPages/AppointmentPages";
import HomePages from "./Componets/HomePages/HomePages";
import Login from "./Componets/Login/Login";
import Navbar from "./Componets/Shared/Navbar/Navbar";
import SignUp from "./Componets/SignUp/SignUp";
import NoMatch from "./Componets/NoMatch/NoMatch";
import RequireAuth from "./Componets/RequireAuth/RequireAuth";
import MyOrder from "./Componets/MyOrder/MyOrder";
import ServicesDetails from "./Componets/HomePages/ServicesDetails/ServicesDetails";
import DashBoardPages from "./Componets/DashBoardPages/DashBoardPages";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={ <HomePages></HomePages> }></Route>
        <Route path="/appointment" element={
          <RequireAuth>
            <AppointmentPages></AppointmentPages>
          </RequireAuth>
        }></Route>
        <Route path="/login" element={ <Login></Login> }></Route>
        <Route path="/signup" element={ <SignUp></SignUp> }></Route>
        <Route path="/order" element={ <MyOrder></MyOrder> }></Route>
        <Route path="/dashboard" element={ <DashBoardPages></DashBoardPages> }></Route>
        <Route path="/serviceDetails/:name/:discription" element={ <ServicesDetails></ServicesDetails> }></Route>
        <Route path="*" element={ <NoMatch></NoMatch> }></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
