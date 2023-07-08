import React, { useContext } from "react";
import { GlobalContext } from "../providers/provider.js";
import { motion } from "framer-motion";
import { Outlet, useNavigate } from "react-router-dom";

const AdminLayout = () => {
  const { authUser, userSignOut } = useContext(GlobalContext);

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/admin/proyectos", { replace: true });
  };

  return (
    <motion.div
      className="w-screen h-screen flex flex-col items-center font-semibold text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <header className="w-full h-24 flex justify-between bg-slate-500/[0.5] px-5">
        <div className="flex items-center gap-2.5">
          <ion-icon name="person-circle" size="large"></ion-icon>
          <h1>{`Logged in as ${authUser.email}`}</h1>
        </div>
        <button onClick={userSignOut}>Sign Out</button>
      </header>
      <div className="flex gap-2.5px w-full h-full overflow-hidden">
        <aside className="w-64 flex flex-col bg-slate-500/[0.5] text-center p-2.5 gap-5 overflow-y-auto">
          <button className="hover:bg-slate-500/[0.55] rounded">Inicio</button>
          <button
            onClick={handleNavigation}
            className="hover:bg-slate-500/[0.55] rounded"
          >
            Proyectos
          </button>
        </aside>
        <main className="w-full p-2 bg-slate-500/[0.9] overflow-y-auto">
          <div className="h-full p-2">
            <Outlet />
          </div>
        </main>
      </div>
      <footer className="w-full flex justify-center bg-slate-500/[0.5] p-2.5">
        © 2023 Pablo Araya Díaz
      </footer>
    </motion.div>
  );
};

export default AdminLayout;
