"use client";
import Link from "next/link";
import React from "react";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import axios from "axios";

const Signup = () => {
  const router = useRouter()
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttondisabled, setButtondisabled] =React.useState()
  const onSignup = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Signup</h1>
      <hr />
      <label htmlFor="username">Username</label>
      <input
        className="p-2 outline-none rounded-md"
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="Username"
      />
      <label htmlFor="email">Email</label>
      <input
        className="p-2 outline-none rounded-md"
        type="text"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Email"
      />
      <label htmlFor="password">Password</label>
      <input
        className="p-2 outline-none rounded-md"
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Password"
      />
      <button
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
