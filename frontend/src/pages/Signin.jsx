import React, { useState } from 'react'
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { Subheading } from "../components/Subheading";
import {useNavigate } from "react-router-dom";
import axios from 'axios';


export function Signin(){
  const navigate = useNavigate();
  const [username, setEmail]  = useState("")
    const [password, setPassword] = useState("")

  let data = JSON.stringify({
    "username": username,
    "password": password
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:3000/api/v1/user/signin',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  
  
   return (
      <div className="bg-slate-300 h-screen flex justify-center p-4"> 
        <div className="w-80 bg-white h-max rounded-xl p-4">
        <Heading label={"Sign in"}></Heading>
        <Subheading label={"Enter your credentials to access your account"}></Subheading>
        <InputBox label={"Email"} placeholder={"john@example.com"} onChange={(e) =>  {
            setEmail(e.target.value)
        }}></InputBox>
        <InputBox label={"Password"} type={'password'} onChange={(e) =>  {
            setPassword(e.target.value)
        }}></InputBox>
        <div className="p-3">
        <Button label={"Sign in"} onClick={() => {
            axios.request(config)
            .then((response) => {
              console.log(JSON.stringify(response.data));
              navigate("/dashboard");
            })
            .catch((error) => {
              console.log(error);
              navigate("/status");
            });
        }}></Button>
        </div>
        <BottomWarning label={"Don't have an account"} to={'/signup'} buttonText={'Signup'}></BottomWarning>
        </div>
        </div>
      )
    
}