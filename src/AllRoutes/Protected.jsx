import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Login from "../components/Login";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLogin = useSelector((state) => state.Auth.isLogin);
  

  
  return <>{isLogin ? children : <Navigate to="/" />}</>;
};

export default ProtectedRoute;
