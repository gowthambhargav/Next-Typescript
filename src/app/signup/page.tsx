"use client";
import Link from "next/link";
import React, { useEffect } from "react";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Signup = () => {
  const router = useRouter()
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttondisabled, setButtondisabled] =React.useState<boolean>(false)
  const [loding, setLoding] =React.useState<boolean>(false)
  const onSignup = async () => {
    try {
      setLoding(true)
      toast.promise(
        axios.post("/api/users/signup", user),
        {
          loading: "Signing up...",
          success: (res) => {
            console.log(res.data);
            router.push('/login');
            return res.data.message;
          },
          error: (err) => {
            console.log(err);
            return err;
          }
        }
      );
   
  //  console.log("user created ",respons.data);
    } catch (error:any) {
      console.log(error.message,"from signup");
      
      toast.error(error.message)
    }finally{
      setLoding(false)
    }

  };

useEffect(()=>{
if (user.email.length >0 && user.password.length>0 && user.username.length>0) {
  setButtondisabled(false)
}else{
  setButtondisabled(true)
}
},[user])

  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Toaster/>
      <h1 className="text-white" >{ loding?"Loding":'Signup'}</h1>
      <hr />
      <label htmlFor="username">Username</label>
      <input
        className="p-2 outline-none rounded-md  text-black"
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="Username"
      />
      <label htmlFor="email">Email</label>
      <input
        className="p-2 outline-none rounded-md  text-black"
        type="text"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Email"
      />
      <label htmlFor="password">Password</label>
      <input
        className="p-2 outline-none rounded-md  text-black"
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Password"
      />
      <button
      disabled={!!buttondisabled}
        onClick={onSignup}
        className="bg-blue-400 duration-300 hover:bg-blue-600 p-2 rounded-sm mt-3 font-bold text-lg tracking-wide"
      >
        Signup
      </button>
      <Link href={"/login"}>Login</Link>
    </div>
  );
};

export default Signup;
