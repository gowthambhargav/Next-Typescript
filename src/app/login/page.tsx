"use client";
import Link from "next/link";
import React from "react";

const Login = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {};
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Login</h1>
      <hr />
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
