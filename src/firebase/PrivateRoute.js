import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../providers/provider";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { authUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authUser) {
      navigate("/login");
    }
  }, [authUser]);

  if (authUser) {
    return <React.Fragment>{children}</React.Fragment>;
  }
};
export default PrivateRoute;
