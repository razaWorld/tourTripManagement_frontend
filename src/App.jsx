import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import MemberDashboard from "./pages/members/dashboard/MemberDashboard";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/adminDashboard" element={<Dashboard />} />
        <Route path="/memberDashboard" element={<MemberDashboard />} />
        <Route path="*" element={<Login />} /> {/* default fallback */}
      </Routes>
    </Router>
  );
}

export default App;
