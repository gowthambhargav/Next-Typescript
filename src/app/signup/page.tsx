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

  return <div>create a nextjs Tailwind CSS signup componment</div>;
};

export default Signup;
