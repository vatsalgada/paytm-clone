import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { Subheading } from "../components/Subheading";

export function Signup(){
    return (
      <div className="flex justify-center items-center bg-slate-300 p-5"> 
        <div className="w-1/2 bg-white  rounded-xl p-4">
        <Heading label={"Sign up"}></Heading>
        <Subheading label={"Enter your information to create an account"}></Subheading>
        <InputBox label={"First Name"} placeholder={"John"} ></InputBox>
        <InputBox label={"Last Name"} placeholder={"Doe"} ></InputBox>
        <InputBox label={"Email"} placeholder={"john@example.com"} ></InputBox>
        <InputBox label={"Password"} ></InputBox>
        <div className="p-3">
        <Button label={"Sign Up"}></Button>
        </div>
        <p className="text-center font-medium">Already have an account? Login</p>
        </div>
        </div>
      )
    
}

