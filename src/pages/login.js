import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { GlobalContext } from "../providers/provider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setAuthUser } = useContext(GlobalContext);

  useEffect(() => {
    console.log(email);
  }, [email]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        navigate("/admin");
        
      } else {
        setAuthUser(null);
      }
    });
    return unsubscribe;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("UserCredential", userCredential);
        if (userCredential.user.emailVerified) {
          console.log("User Verified");
        } else {
          console.log("User Not Verified");
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };


  return (
    <div className="h-screen flex flex-col justify-center items-center text-white ">
      
      <motion.div
        className="flex flex-col text-center bg-slate-600/[0.7] p-10 gap-5 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)] rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-bold">Log in</h1>
        <p className="text-white">
          Please enter your email and password to log in
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
            Log in
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;