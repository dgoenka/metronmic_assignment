import React from "react";
import { useStore } from "effector-react";
import { $me } from "../../Store/Auth.ts";
import { Navigate } from "react-router-dom";

type LoginProps = {
  aProp?: string;
};

const Login: React.FC<LoginProps> = () => {
  const user = useStore($me);

  if (user.id) {
    return <Navigate to={"/"} replace />;
  }

  return <div>Login</div>;
};

export default Login;
