import React, { useContext } from "react";
import { userSignOut } from "../firebase/utils";
import { GlobalContext } from "../providers/provider.js";
import { motion } from "framer-motion";
const Admin = () => {
  const { authUser,setAuthUser } = useContext(GlobalContext);

  const handleSignOut = () => {
    setAuthUser(undefined);
    userSignOut();
  };

  return (
    <motion.div className="w-screen h-screen flex flex-col items-center text-white "
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    >
      <header className="w-full h-24 flex justify-between bg-slate-500/[0.5] border border-red-400 gap-2.5 p-2.5">
        <div className="flex items-center gap-2.5">
          <ion-icon name="person-circle" size="large"></ion-icon>
          <h1>{`Logged in as ${authUser.email}`}</h1>
        </div>
        <button onClick={handleSignOut}>Sign Out</button>

        
      </header>
      <div className="flex gap-2.5px h-full w-full">
        <aside className="w-64 flex flex-col bg-slate-500/[0.5] border border-yellow-400 p-2.5 gap-5" >
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Proyectos</button>

        </aside>
        <main className="w-max border border-cyan-500 p-2.5">mainnnnnnnnnnnnnnnnnnSnnnnnnnnnnnnnssssssssssssssssssssssssssssssssssssssssssnnnnnnnmnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn

        </main>
      </div>
      <footer>footer</footer>
    </motion.div>
  );
};

export default Admin;
