import { Heading } from "../components/Heading";
import userlogo from '../assets/user.png'
import { Subheading } from "../components/Subheading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from 'axios';


export function SendMoney(){
       const navigate = useNavigate();
       let [searchParams, setSearchParams] = useSearchParams();
       let id = searchParams.get("Id");
       let name = searchParams.get("name")
       let transferData = JSON.stringify({
              "amount": 100,
              "to": id
            });
       let config = {
              method: 'post',
              maxBodyLength: Infinity,
              url: 'http://localhost:3000/api/v1/account/transfer',
              headers: { 
                'Authorization': 'Bearer ' + localStorage.getItem('token'), 
                'Content-Type': 'application/json'
              },
              data: transferData
            };
           
       
    return (
       <>
<div className="flex h-screen">
       <div className="m-auto w-1/2">
        <Heading label={'Send Money'}></Heading>
        <div className="flex pt-4">
        <img src={userlogo} alt="" className='w-8 '/>
        <p className="pl-3 font-medium">{name}</p>
        

        </div>
        
      
       <InputBox label={'Amount'} placeholder={'Enter Amount'}></InputBox>
       <div className="p-2"></div>
       <Button  label={'Initiate Transfer'} onClick={() => {
            axios.request(config)
            .then((response) => {
              console.log(JSON.stringify(response.data));
              navigate("/Status?status=success");              
            })
            .catch((error) => {
              console.log(error);
              navigate("/status")
            });
       }}></Button>
     
       </div>
</div>
       
       </>
      )
    
}