import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      {/* HEADER */}
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <span className="dashboard-subtitle">
          Manage Trips, Members, Voting & Societies
        </span>
      </header>

      {/* MAIN CONTENT */}
      <main className="dashboard-main">
        {/* STATS CARDS */}
        <section className="dashboard-stats">
          <div className="stat-card">
            <p>Total Members</p>
            <h3>120</h3>
          </div>
          <div className="stat-card">
            <p>Total Trips</p>
            <h3>35</h3>
          </div>
          <div className="stat-card">
            <p>Upcoming Trips</p>
            <h3>5</h3>
          </div>
          <div className="stat-card">
            <p>Societies</p>
            <h3>8</h3>
          </div>
        </section>

        {/* TABLES */}
        <section className="dashboard-tables">
          <div className="table-card">Trips List (Coming Soon)</div>
          <div className="table-card">Members List (Coming Soon)</div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="dashboard-footer">
        © 2025 Tour Trip Management System
      </footer>
    </div>
  );
}
