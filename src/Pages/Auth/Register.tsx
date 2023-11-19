import React from "react";
import { useStore } from "effector-react";
import { $me } from "../../Store/Auth.ts";
import { Navigate } from "react-router-dom";

type RegisterProps = {
  aProp?: string;
};

const Register: React.FC<RegisterProps> = () => {
  const user = useStore($me);

  if (user.id) {
    return <Navigate to={"/"} replace />;
  }
  return <div>Register</div>;
};

export default Register;
