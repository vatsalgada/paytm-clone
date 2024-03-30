import React, { useState } from 'react'
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { Subheading } from "../components/Subheading";

export function Signin(){

  const [username, setEmail]  = useState("")
    const [password, setPassword] = useState("")
   return (
      <div className="bg-slate-300 h-screen flex justify-center p-4"> 
        <div className="w-80 bg-white h-max rounded-xl p-4">
        <Heading label={"Sign in"}></Heading>
        <Subheading label={"Enter your credentials to access your account"}></Subheading>
        <InputBox label={"Email"} placeholder={"john@example.com"} ></InputBox>
        <InputBox label={"Password"} ></InputBox>
        <div className="p-3">
        <Button label={"Sign in"}></Button>
        </div>
        <BottomWarning label={"Don't have an account"} to={'/signup'} buttonText={'Signup'}></BottomWarning>
        </div>
        </div>
      )
    
}