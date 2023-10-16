import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginSignup from "../components/LoginSignup";
import DashBoard from "../components/DashBoard";
import ProtectedRoute from "./Protected";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginSignup />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashBoard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
