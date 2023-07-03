import React, { useContext } from "react";
import { userSignOut } from "../firebase/utils";
import { GlobalContext } from "../providers/provider.js";
import { motion } from "framer-motion";
import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  const { authUser, setAuthUser } = useContext(GlobalContext);

  const handleSignOut = () => {
    setAuthUser(undefined);
    userSignOut();
  };

  return (
    <motion.div
      className="w-screen h-screen flex flex-col items-center text-white "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <header className="w-full h-24 flex justify-between bg-slate-500/[0.5] gap-2.5 p-2.5">
        <div className="flex items-center gap-2.5">
          <ion-icon name="person-circle" size="large"></ion-icon>
          <h1>{`Logged in as ${authUser.email}`}</h1>
        </div>
        <button onClick={handleSignOut}>Sign Out</button>
      </header>
      <div className="flex gap-2.5px w-full h-full overflow-hidden">
        <aside className="w-64 flex flex-col bg-slate-500/[0.5] text-center p-2.5 gap-5 overflow-y-auto">
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <button className="hover:bg-slate-500/[0.55]">Inicio</button>
          <Link to={"/admin/proyectos"} className="hover:bg-slate-500/[0.55]">
            Proyectos
          </Link>
        </aside>
        <main className="w-full p-2.5 bg-slate-500/[0.9] overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>
      <footer className="w-screen flex justify-center bg-slate-500/[0.5] p-2.5">
        footer
      </footer>
    </motion.div>
  );
};

export default AdminLayout;
