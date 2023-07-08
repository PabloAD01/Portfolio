import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log(email);
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("UserCredential", userCredential);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <motion.div
      className="h-screen flex flex-col justify-center items-center text-white "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <button
        onClick={() => navigate("/")}
        className="absolute top-0 left-0 w-max h-max font-semibold text-lg bg-slate-900 opacity-50 m-2 px-2 py-1 rounded-md shadow-2xl hover:bg-white/[0.5] hover:text-slate-900"
      >
        Main page
      </button>
      <div className="flex flex-col text-center bg-slate-600/[0.7] p-10 gap-5 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)] rounded-lg">
        <h1 className="text-6xl font-bold">Register</h1>
        <p className="text-white">
          Please enter an email and a password to register
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 text-black p-5"
        >
          <input
            onChange={(e) => setEmail(e.currentTarget.value)}
            className="text-center h-10 rounded-lg"
            type="email"
            placeholder="UserEmail@email.com"
          ></input>
          <input
            onChange={(e) => setPassword(e.currentTarget.value)}
            className="text-center h-10 rounded-lg"
            type="password"
            placeholder="Password"
          ></input>
          <button
            className="font-bold bg-slate-900 p-2.5 text-white rounded-md shadow-2xl active:bg-white/[0.5] active:text-slate-900"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Register;
