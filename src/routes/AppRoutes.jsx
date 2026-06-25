import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing"
import Auth from "../pages/Auth"
import StudentDashboard from "../pages/StudentDashboard"
import DriverDashboard from "../pages/DriverDashboard"

export default function AppRoutes() {
    return(
        <Routes>
           <Route path="/" element={<Landing />} />
           <Route path="/auth" element={<Auth />} />
           
        </Routes>
    )
}