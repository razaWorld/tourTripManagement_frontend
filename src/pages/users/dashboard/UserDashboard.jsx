import "./UserDashboard.css";
import { Navbar } from "../../../components/global";

export default function UserDashboard({ user }) {
  // You can define your nav links
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Profile", href: "#profile" },
    { label: "Trips", href: "#trips" },
    { label: "My Trips", href: "#mytrips" },
  ];

  return (
    <div className="user-dashboard-page">
      {/* NAVBAR */}
      <Navbar user={user} links={navLinks} />

      {/* HEADER / HERO */}
      <header className="dashboard-header">
        <h1>Welcome, {user?.name || "User"}!</h1>
        <p>Here's your trip overview and upcoming activities.</p>
      </header>

      {/* STATS CARDS */}
      <section className="stats-cards">
        <div className="card card-primary">
          <h3>2</h3>
          <p>Your Trips</p>
        </div>
        <div className="card card-success">
          <h3>1</h3>
          <p>Completed Trips</p>
        </div>
        <div className="card card-warning">
          <h3>3</h3>
          <p>Upcoming Trips</p>
        </div>
        <div className="card card-info">
          <h3>5</h3>
          <p>Society Members</p>
        </div>
      </section>

      {/* TABLES */}
      <section className="dashboard-tables">
        <div className="table-card" id="trips">
          <h3>Upcoming Trips</h3>
          <p>Details will appear here soon.</p>
        </div>
        <div className="table-card" id="mytrips">
          <h3>My Trips</h3>
          <p>Details will appear here soon.</p>
        </div>
      </section>
    </div>
  );
}
