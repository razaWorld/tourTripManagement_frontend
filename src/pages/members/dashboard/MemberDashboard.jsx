import "./MemberDashboard.css";

export default function MemberDashboard() {
  return (
    <div className="member-dashboard-page">
      {/* HEADER */}
      <header className="member-dashboard-header">
        <h1>Member Dashboard</h1>
        <span className="member-dashboard-subtitle">
          Overview of your trips and activities
        </span>
      </header>

      {/* MAIN CONTENT */}
      <main className="member-dashboard-main">
        {/* STATS CARDS */}
        <section className="member-dashboard-stats">
       
          <div className="stat-card">
            <p>Total Trips</p>
            <h3>35</h3>
          </div>
          <div className="stat-card">
            <p>Your Upcoming Trips</p>
            <h3>5</h3>
          </div>
        </section>

        {/* TABLES */}
        <section className="member-dashboard-tables">
          <div className="table-card">Your Trips (Coming Soon)</div>
          <div className="table-card">Notifications (Coming Soon)</div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="member-dashboard-footer">
        © 2025 Tour Trip Management System
      </footer>
    </div>
  );
}
