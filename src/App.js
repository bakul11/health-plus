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
import DashPages from "./Componets/DashPages/DashPages";
import AddDoctors from "./Componets/DashPages/AddDoctors";
import DoctorList from "./Componets/DashPages/DoctorList";
import AdminUser from "./Componets/DashPages/AdminUser";


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

        {/* Routing Nested */ }
        <Route path="/dash" element={ <DashPages></DashPages> }>
          <Route index element={ <AddDoctors></AddDoctors> }></Route>
          <Route path="DoctorList" element={ <DoctorList></DoctorList> }></Route>
          <Route path="admin" element={ <AdminUser></AdminUser> }></Route>
        </Route>
        {/* Routing Nested */ }
        <Route path="/serviceDetails/:name/:discription" element={ <ServicesDetails></ServicesDetails> }></Route>
        <Route path="*" element={ <NoMatch></NoMatch> }></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
