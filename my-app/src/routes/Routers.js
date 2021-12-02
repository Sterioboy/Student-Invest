import React from "react";
import { Routes, Route } from 'react-router-dom';
import Main from "../components/Main/Main";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";


const Routers = () => {

  //Component
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/auth/signup" element={<SignUp />} />
      <Route path="/auth/signin" element={<SignIn />} />
    </Routes>
  );
};

export default Routers;
