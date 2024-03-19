import { Routes, Route } from "react-router-dom";
import AttendanceDashboard from "./pages/Admin";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AttendanceDashboard />} />
    </Routes>
  );
};

export default AdminRoutes;
