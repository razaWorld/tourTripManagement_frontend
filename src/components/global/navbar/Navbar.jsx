import React from "react";
import "./Navbar.css";
import CustomButton from "../customButton/CustomButton";

export default function Navbar({ user, links, onLogout }) {
  return (
    <nav className="custom-navbar">
      <div className="navbar-left">
        <h2>Trip Management</h2>
      </div>

      <div className="navbar-center">
        {links.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>

      <div className="navbar-right">
        <span className="user-name">{user?.name || "Guest"}</span>
       
        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}
