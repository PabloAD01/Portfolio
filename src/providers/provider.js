import React, { createContext, useState, useEffect } from "react";
import { auth } from "../firebase/config";
import {
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export function GlobalProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        console.log("User is signed in", user);
        navigate("/admin");
      } else {
        setAuthUser(null);
      }
    });
    return unsubscribe;
  }, [authUser]);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.log("Error signing out", error);
      });
  };

  const userSignIn = (email, password) => {
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
    <GlobalContext.Provider
      value={{
        authUser,
        setAuthUser,
        userSignOut,
        userSignIn,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
