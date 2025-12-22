import { useEffect, useState } from "react";
import API from "../../api/api";

export default function Dashboard() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    API.get("/dashboard/society").then(res => setStats(res.data));
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Total Members: {stats.members}</p>
      <p>Total Trips: {stats.trips}</p>
    </div>
  );
}
