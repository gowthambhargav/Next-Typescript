"use client"

import axios from "axios";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import React,{useState} from 'react'


export default function Profile() {
  const router = useRouter()
const [data,setData] = useState('nothing')
  const logout = ()=>{
try {
  toast.promise(axios.get("/api/users/logout"),{
    loading:"Loging out",
    success:(res)=>{
   return res.data.message
    },
    error:(err)=>{
      return err.data.message
    }
  })
  setTimeout(() => {
    router.push("/login")
  }, 800);
} catch (error:any) {
  console.log(error.message);
  toast.error(error.message)
  
}
  }
  const getUserDetails = async ()=>{
   const respons = await axios.get('/api/users/me')
   console.log(respons.data);
   setData(respons.data.data._id)
   
  }
  return (
  <>
    <Toaster/>
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <h2 className="p-2 rounded bg-emerald-500">{data==='nothing'?"Nothing":<Link href={`/profile/${data}`}>{data}</Link>}</h2>
      <button className="p-2 bg-green-400 mt-3 text-white" onClick={logout}>Logout</button>
      <button className="p-2 bg-green-400 mt-3 text-white" onClick={getUserDetails}>getUserDetails</button>
   
    </div>
  </>
  );
}
