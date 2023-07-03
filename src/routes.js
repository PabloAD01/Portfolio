import Login from "./pages/login";
import Register from "./pages/register";
import App from "./App";
import AdminLayout from "./layouts/AdminLayout";
import PrivateRoute from "./firebase/PrivateRoute";

const routes = [
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admin",
    element:<PrivateRoute><AdminLayout /></PrivateRoute>,
  },
];

export default routes;
