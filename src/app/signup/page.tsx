"use client";
import Link from "next/link";
import React from "react";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import axios from "axios";

const Signup = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {};

  return (
    <div>
      create a nextjs signup componment using Tailwind CSS
      <div>
        <input
          type="text"
          placeholder="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <input
          type="text"
          placeholder="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button onClick={onSignup}>Signup</button>
        nk
      </div>
    </div>
  );
};

export default Signup;
