import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext.js";

export default function ProtectedRoute({ children }) {
  const { token, loading } = useAuth();
  if (loading) return null;            // or a loader spinner
  if (!token) return <Navigate to="/login" replace />;
  return children;
}
