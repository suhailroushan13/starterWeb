import React from 'react';
import './Dashboard.css'; // Add custom styles if needed
import logo from "../assets/image.png";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); // Clear all local storage
    navigate('/'); // Redirect to home page
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="sidebar" style={{ backgroundColor: '#f8f9fa', height: '100vh', width: '200px' }}>
        <div className="d-flex justify-content-center align-items-center p-3">
          <img src={logo} alt="Logo" style={{ height: "40px" }} />
        </div>
        <ul className="list-unstyled p-3">
          <li className="py-2">Dashboard</li>
          <li className="py-2">Settings</li>
          <li className="py-2">Analytics</li>
          <li className="py-2">Help</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={logo} alt="Logo" style={{ height: "40px" }} className="me-2" />
            <span>Professional Dashboard</span>
          </a>
          <div className="ms-auto">
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
          </div>
        </nav>

        {/* Dashboard Content */}
        <div className="p-4">
          <h1>Welcome to the Professional Dashboard</h1>
          <p>Manage your settings, view analytics, and explore features.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
