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
  return (
    <div
      className={"w-100 h-100 d-flex align-items-center justify-content-center"}
    >
      Register
    </div>
  );
};

export default Register;
