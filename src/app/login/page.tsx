"use client";
import Link from "next/link";
import React, { useEffect } from "react";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const router = useRouter()
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttondisabled, setButtondisabled] =React.useState<boolean>(false)
  const [loding, setLoding] =React.useState<boolean>(false)

  const onLogin = async () => {
    try {
      setLoding(true)
const response = await axios.post('/api/users/login',user)
console.log(response.data);
if (response.data.status === 500) {
  toast.error(response.data.message,{duration:1000})
}else{
      toast.success("Login Successfull", { duration: 2000 })
setTimeout(() => {
  router.push("/profile")
}, 2002);
}
  

    } catch (error:any) {
      console.log(error.message,"login failed");
      toast.error(error.message)
    } finally{
      setLoding(false)
    }
  };
  useEffect(()=>{
    if (user.email.length >0 && user.password.length>0) {
      setButtondisabled(false)
    }else{
      setButtondisabled(true)
    }
  },[user])
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
      <Toaster/>
      <h1 className="text-white">Login</h1>
      <hr />
      <label htmlFor="email">Email</label>
      <input
        className="p-2 outline-none rounded-md text-black"
        type="text"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Email"
      />
      <label htmlFor="password">Password</label>
      <input
        className="p-2 outline-none rounded-md text-black"
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Password"
      />
      <button
      disabled={!!buttondisabled}
        onClick={onLogin}
        className="bg-blue-400 duration-300 hover:bg-blue-600 p-2 rounded-sm mt-3 font-bold text-lg tracking-wide"
      >
        Login
      </button>
      <Link href={"/signup"}>Signup</Link>
    </div>
  );
};

export default Login;
