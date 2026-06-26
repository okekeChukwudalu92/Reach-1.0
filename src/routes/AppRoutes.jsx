import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import Landing from "../pages/Landing";
import Auth from "../pages/Auth";
import StudentDashboard from "../pages/StudentDashboard";
import DriverDashboard from "../pages/DriverDashboard";

export default function AppRoutes() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Auth />} />
      
      <Route
        path="/student"
        element={user?.role === "student" ? <StudentDashboard /> : <Navigate to="/auth" />}
      />
      <Route
        path="/driver"
        element={user?.role === "driver" ? <DriverDashboard /> : <Navigate to="/auth" />}
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}