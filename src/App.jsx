import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login,Register,PrivateRoute } from "./pages/auth";
import { Dashboard } from "./pages/admin";
import { MemberDashboard } from "./pages/members";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 🔐 ADMIN */}
        <Route
          path="/adminDashboard"
          element={
            <PrivateRoute role="admin">
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* 🔐 MEMBER */}
        <Route
          path="/memberDashboard"
          element={
            <PrivateRoute role="member">
              <MemberDashboard />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
