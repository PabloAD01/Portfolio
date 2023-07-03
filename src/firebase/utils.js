import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

export const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.log("Error signing out", error);
      });
  };