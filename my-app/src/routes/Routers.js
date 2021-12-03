import React from "react";
import { Routes, Route } from 'react-router-dom';
import Logout from "../components/Logout/Logout";
import Main from "../components/Main/Main";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";


const Routers = () => {

  //Component
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/auth/register" element={<SignUp />} />
      <Route path="/auth/login" element={<SignIn />} />
      <Route path="/auth/logout" element={<Logout />} />
    </Routes>
  );
};

export default Routers;
