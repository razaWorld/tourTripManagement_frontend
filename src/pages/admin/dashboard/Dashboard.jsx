import { useEffect, useState } from "react";
import { getAllUsers } from "../../../api/auth.api"; // include delete if needed later
import "./Dashboard.css";

export default function Dashboard() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await getAllUsers();
        console.log("Members API Response:", res); // 🔍 log API
        setMembers(res.data); // set members from API
      } catch (err) {
        console.error("Error fetching members:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMembers();
  }, []);

  return (
    <div className="dashboard-page">
      {/* HEADER */}
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <span className="dashboard-subtitle">Manage Trips and Members</span>
      </header>

      {/* MAIN CONTENT */}
      <main className="dashboard-main">
        {/* STATS CARDS */}
        <section className="dashboard-stats">
          <div className="stat-card">
            <p>Total Members</p>
            <h3>{members.length}</h3>
          </div>
          <div className="stat-card">
            <p>Total Trips</p>
            <h3>35</h3>
          </div>
          <div className="stat-card">
            <p>Upcoming Trips</p>
            <h3>5</h3>
          </div>
        </section>

        {/* MEMBERS TABLE */}
        <section className="dashboard-tables">
          <div className="table-card">
            <h3>Members List</h3>
            {loading ? (
              <p className="loading">Loading members...</p>
            ) : (
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {members.map((member) => (
                      <tr key={member._id}>
                        <td>{member.name}</td>
                        <td>{member.email}</td>
                        <td>{member.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="table-card">
            <h3>Trips List (Coming Soon)</h3>
          </div>
        </section>
      </main>

      <footer className="dashboard-footer">
        © 2025 Trip Management System
      </footer>
    </div>
  );
}
