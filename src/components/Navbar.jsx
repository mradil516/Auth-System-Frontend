import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role'); // Admin or user

    const handleLogout = () => {
        // Remove token and role from localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        window.location.href = '/login';
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">Auth System</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {/* Home link always visible */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>

                        {/* Links for guest users */}
                        {!token && <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                        </>}

                        {/* Links for logged-in users */}
                        {token && <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/profile">Profile</Link>
                            </li>

                            {/* Admin Dashboard link for admin role */}
                            {role === 'admin' && (
                                <li className="nav-item">
                                    <Link className="nav-link" to="/admin-dashboard">Admin Dashboard</Link>
                                </li>
                            )}

                            <li className="nav-item">
                                <button className="btn btn-danger btn-sm ms-2" onClick={handleLogout}>Logout</button>
                            </li>
                        </>}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
