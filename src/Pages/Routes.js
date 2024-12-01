import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "../Components/Signup/Signup";
import Login from "../Components/Login/Login";
import Home from "./Home";
import Create from "../Components/Create/Create";
import View from "../Components/View/View";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="/create" element={<Create />} />
        <Route path="/view/:id" element={<View />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
