import React from 'react';
import { Outlet } from 'react-router-dom';
import './AdminLayout.css'; // Import CSS
import { Link } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <div className="admin-sidebar">
        <Link className="menu-item" to="/dashboard">
          Dashboard
        </Link>
        <Link className="menu-item" to="/inventory">
          Inventory
        </Link>
        <Link className="menu-item" to="/sales">
          Sales
        </Link>
        <Link className="menu-item" to="/users">
          Users
        </Link>
      </div>

      {/* Header */}
      <div className="admin-header">
        <h1>Grocery Management</h1>
      </div>

      {/* Main Content */}
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
