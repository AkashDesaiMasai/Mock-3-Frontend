import React, { useState } from "react";
import { Input } from '@chakra-ui/react' 
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import axios from "axios";
const Signup = (prop) => {
  const [user,setUser]=useState({
    name:"",
    email:"",
    password:""
  })
  const BaseURL = process.env.REACT_APP_API_URL || `http://localhost:8080`;
  let {setCurr,curr}=prop;

  const handleSubmit =async ()=>{

    const res =await axios.post(`${BaseURL}/signup`,user)
    console.log(res)
  }
  return (
    <Container>
      <h1>signup</h1>
      <Input placeholder='Name' onChange={(e)=>setUser({...user, name:e.target.value})} />
      <Input placeholder='email' onChange={(e)=>setUser({...user, email:e.target.value})} />
      <Input placeholder='password' onChange={(e)=>setUser({...user, password:e.target.value})}/>
      <Button colorScheme='blue' onClick={handleSubmit}>SignUP</Button>
      <Button colorScheme="blue" onClick={() => setCurr(!curr)}>
        Login
      </Button>
    </Container>
  );
};

export default Signup;
