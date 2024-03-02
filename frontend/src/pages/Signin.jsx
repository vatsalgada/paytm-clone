import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { Subheading } from "../components/Subheading";

export function Signin(){
   return (
      <div className="flex justify-center items-center bg-slate-300 p-5"> 
        <div className="w-1/2 bg-white  rounded-xl p-4">
        <Heading label={"Sign in"}></Heading>
        <Subheading label={"Enter your credentials to access your account"}></Subheading>
        <InputBox label={"Email"} placeholder={"john@example.com"} ></InputBox>
        <InputBox label={"Password"} ></InputBox>
        <div className="p-3">
        <Button label={"Sign in"}></Button>
        </div>
        <p className="text-center font-medium">Don't have an account? Signup</p>
        </div>
        </div>
      )
    
}