import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AdminLayout from "./layouts/AdminLayout";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./firebase/config.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { GlobalProvider } from "./providers/provider.js";
import Login from "./pages/login";
import PrivateRoute from "./firebase/PrivateRoute";
import Proyectos from "./pages/proyectos";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/admin"
            element={
              <PrivateRoute><AdminLayout/></PrivateRoute>
            }
          >
            <Route path="proyectos" element={<Proyectos/>} />
          </Route>
        </Routes>
      </Router>
    </GlobalProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
