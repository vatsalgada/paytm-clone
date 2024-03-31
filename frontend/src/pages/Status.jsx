import { useState } from "react";
import { Success } from "../components/Success";
import { Dashboard } from "./Dashboard";
import { Link } from "react-router-dom"
import { useSearchParams } from "react-router-dom";

export function Status(){
    const [searchParams, setSearchParams] = useSearchParams();
    let status = searchParams.get("status");
    if(status == "success"){
        return <div className="w-60 place-content-center">
        <div className="flex justify-center p-4 h-center flex-col">
                      <Success></Success>
        
           <Link className="pointer underline pl-1 cursor-pointer" to={'/Dashboard'}>
            
          <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dashboard</button>
          </Link>
            </div>
            </div>
    }else{
        return <div className="w-60 place-content-center">
        <div className="flex justify-center p-4 h-center flex-col">
                      Not successful
        
           <Link className="pointer underline pl-1 cursor-pointer" to={'/Dashboard'}>
            
          <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dashboard</button>
          </Link>
            </div>
            </div>
    }
  
        
}
