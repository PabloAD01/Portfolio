import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";
import "./styles/post-css.css";
import reportWebVitals from "./reportWebVitals";
import "./firebase/config.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./providers/provider.js";
import Login from "./pages/login";
import PrivateRoute from "./firebase/PrivateRoute";
import Proyectos from "./pages/admin/proyectos";
import Dashboard from "./pages/dashboard";
import EditarProyectos from "./pages/admin/editar-proyectos";
import AñadirProyectos from "./pages/admin/añadir-proyectos";
import amplitude from "amplitude-js";
import Register from "./pages/register";
import Web from "./layouts/WebLayout";

const AdminLayout = lazy(() => import("./layouts/AdminLayout"));

// initialize the client
amplitude.getInstance().init(process.env.REACT_APP_AMPLITUDE_TOKEN);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <GlobalProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="web/:id" element={<Web />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/admin"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <PrivateRoute>
                <AdminLayout />
              </PrivateRoute>
            </Suspense>
          }
        >
          <Route path="" element={<Dashboard />} />
          <Route path="proyectos" element={<Proyectos />} />
          <Route path="proyectos/editar/:id" element={<EditarProyectos />} />
          <Route path="proyectos/añadir" element={<AñadirProyectos />} />
        </Route>
      </Routes>
    </GlobalProvider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
