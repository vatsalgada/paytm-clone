import { useState } from "react"
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { Subheading } from "../components/Subheading";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { BottomWarning } from "../components/BottomWarning";




export function Signup(){
  const navigate = useNavigate();
    const [firstName, setFirstName]  = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setEmail]  = useState("")
    const [password, setPassword] = useState("")
    return (
      <div className="bg-slate-300 h-screen flex justify-center p-4"> 
        <div className="w-80 bg-white  rounded-xl p-4 h-max">
        <Heading label={"Sign up"}></Heading>
        <Subheading label={"Enter your information to create an account"}></Subheading>
        <InputBox label={"First Name"} placeholder={"John"} onChange={(e) =>  {
            setFirstName(e.target.value)
        }}></InputBox>
        <InputBox label={"Last Name"} placeholder={"Doe"} onChange={(e) =>  {
            setLastName(e.target.value)
        }}></InputBox>
        <InputBox label={"Email"} placeholder={"john@example.com"} onChange={(e) =>  {
            setEmail(e.target.value)
        }}></InputBox>
        <InputBox label={"Password"} type={'password'} onChange={(e) =>  {
            setPassword(e.target.value)
        }}></InputBox>
        <div className="p-3">
        <Button label={"Sign Up"} onClick={async () => {
          await axios.post("http://localhost:3000/api/v1/user/signup", {
            firstName, 
            lastName, 
            username, 
            password
          }).then(function (response) {
            console.log(response);
            localStorage.setItem("token", response.data.token);
            navigate("/dashboard");
          })
          .catch(function (error) {
            console.log(error);
            
          })
        }}></Button>
        </div>
      <BottomWarning label={'Already have an account?'} to={'/signin'} buttonText={'Login'}></BottomWarning>
        </div>
        </div>
      )
    
}

 