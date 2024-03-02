/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import axios from "axios";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import React,{useState,useEffect} from 'react'
import { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter()
    const [token,setToken] = useState('')
    const [verified,setVerified] = useState(false)
    const [error,setError] = useState(false)
const verifyUserEmail = async ()=>{
    toast.loading("Verifying email",{duration:1000})
    try {
        await axios.post("/api/users/verifyemail",{token})
        setVerified(true)
        toast.success("Email verified",{duration:3000})
    } catch (error:any) {
        setError(true)
        toast.error(error.message,{duration:3000})
        console.log(error.message);
        
    }
}
useEffect(()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    console.log(token);
    
    if(token){
        setToken(token || "")
    }
},[])
useEffect(()=>{
    if(token.length>0){
        verifyUserEmail()
    }
},[token])
  return (
    <div className="flex justify-center flex-col items-center">
        <Toaster/>
        <h1 className="text-4xl">Verify Email</h1>
        <br/>
        <h2>{token?`${token}`:"no token"}</h2>

        {verified && <div className="text-green-500 mt-3">Email verified <br/> <Link className="text-blue-500 p-2 border rounded" href="/login">Login</Link></div>}
        {error && <div className="text-red-500 mt-3">Error</div>}
    </div>
  )
}

export default page