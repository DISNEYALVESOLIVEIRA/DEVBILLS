import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";

const PrivateRoutes = () => {
    const { authState } = useAuth();

    if (authState.loading) return null;

    return authState.user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoutes;