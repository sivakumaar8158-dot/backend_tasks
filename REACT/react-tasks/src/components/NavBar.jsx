import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? "nav-link active fw-bold text-primary" : "nav-link";
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm mb-4">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">ReactTasks</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className={isActive('/')} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={isActive('/about')} to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={isActive('/contact')} to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
