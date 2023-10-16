import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import axios from "axios";
import { Login } from "./Store/AuthSlice.js";
import { useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const Signup = (prop) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
let {setCurr,curr}=prop;

  const Dispatch = useDispatch();
  const toast = useToast();
  let token = useSelector((state) => state.Auth.token);
  const isLogin = useSelector((state) => state.Auth.isLogin);
  console.log("token is", token);
  const URL = process.env.REACT_APP_API_URL || `http://localhost:8080`;

  const handleSubmit = async () => {
    if (user.email !== "" && user.password !== "") {
      const res = await axios.post(`${URL}/login`,user);
      console.log(res);
     
        Dispatch(Login(res.data.token));

      //   toast({
      //     title: "Login Succesfull.",
      //     status: "success",
      //     duration: 9000,
      //     isClosable: true,
      //   });
      // } else {
      //   toast({
      //     title: "Login Failed",
      //     description: "We've created your account for you.",
      //     status: "error",
      //     duration: 9000,
      //     isClosable: true,
      //   });
      
    } else {
      alert("fill all fields");
    }
  };
  return (
    <>
      {isLogin ? (
        <Navigate to="/DashBoard" />
      ) : (
        <Container>
          <h1>Login</h1>

          <Input
            placeholder="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
          <Input
            placeholder="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <Button colorScheme="blue" onClick={handleSubmit}>
            Login
          </Button>
          <Button colorScheme="blue" onClick={() => setCurr(!curr)}>
        SignUP
      </Button>
        </Container>
      )}
    </>
  );
};

export default Signup;
