import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Button } from "@chakra-ui/react";
const LoginSignup = () => {
  const [curr, setCurr] = useState(true);

  return (
    <div className="Log">
     
      {curr ? <Login setCurr={setCurr} curr={curr}/> : <Signup  setCurr={setCurr} curr={curr}/>}
    </div>
  );
};

export default LoginSignup;
