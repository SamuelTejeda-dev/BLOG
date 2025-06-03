import { Navigate, Outlet } from "react-router-dom";
import useProtectedRoute from "../hooks/useProtectedRoute";

const ProtectedRoute = () => {
  const { data, isLoading, isError } = useProtectedRoute();
  console.log(data);

  if (isLoading) return <div>Loading...</div>;

  if (isError || !data) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
