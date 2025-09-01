import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    return (
        <div className="container-fluid p-0">
            <div className="jumbotron text-center text-white bg-dark d-flex align-items-center justify-content-center" style={{height: '100vh'}}>
                <div>
                    <h1 className="display-3 fw-bold">Welcome to Auth System</h1>
                    <p className="lead mb-4">Secure registration, login, and role-based access made easy.</p>
                    <div>
                        <Link to="/register" className="btn btn-primary btn-lg me-3">Register</Link>
                        <Link to="/login" className="btn btn-outline-light btn-lg">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
