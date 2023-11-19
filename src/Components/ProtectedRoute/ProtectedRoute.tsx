import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { useStore } from "effector-react";
import { $me } from "../../Store/Auth.ts";

type ProtectedRouteProps = {
  children?: ReactNode;
};
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const user = useStore($me);

  console.log(
    "in ProtectedRoute, user.requestStatus is: " + user.requestStatus,
  );

  if (user.requestStatus === "PENDING") return null;

  if (!user.id) {
    return <Navigate to={"/login"} replace />;
  }

  console.log("children is: ", children);

  return children;
};

export default ProtectedRoute;
