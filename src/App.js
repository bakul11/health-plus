import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppointmentPages from "./Componets/AppointmentPages/AppointmentPages";
import HomePages from "./Componets/HomePages/HomePages";
import Login from "./Componets/Login/Login";
import Navbar from "./Componets/Shared/Navbar/Navbar";
import SignUp from "./Componets/SignUp/SignUp";
import NoMatch from "./Componets/NoMatch/NoMatch";
import RequireAuth from "./Componets/RequireAuth/RequireAuth";
import ServicesDetails from "./Componets/HomePages/ServicesDetails/ServicesDetails";
import DashBoard from "./Componets/DashBoard/DashBoard";
import WelComeBoard from "./Componets/DashBoard/WelComeBoard";
import MyServices from "./Componets/DashBoard/MyServices";
import AddServices from "./Componets/DashBoard/AddServices";
import AllBookingServices from "./Componets/DashBoard/AllBookingServices";
import Admin from "./Componets/DashBoard/Admin";



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

        {/* ==============================DashBoard Start ============================== */ }
        <Route path='/dashboard' element={ <DashBoard></DashBoard> }>
          <Route index element={ <WelComeBoard></WelComeBoard> }></Route>
          <Route path="myservices" element={ <MyServices></MyServices> }></Route>
          <Route path='addservices' element={ <AddServices></AddServices> }></Route>
          <Route path='admin' element={ <Admin></Admin> }></Route>
          <Route path='allbooking' element={ <AllBookingServices></AllBookingServices> }></Route>
        </Route>
        {/* ==============================DashBoard End ============================== */ }

        <Route path="/serviceDetails/:name/:discription" element={ <ServicesDetails></ServicesDetails> }></Route>
        <Route path="*" element={ <NoMatch></NoMatch> }></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
