import React from 'react';

const UserStatus = ({ user }) => {
    if (!user) {
        return (
            <div className="alert alert-warning d-flex align-items-center" role="alert">
                <div className="spinner-border spinner-border-sm me-2" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div>Loading user...</div>
            </div>
        );
    }

    return (
        <div className="card border-primary mb-3 bg-light shadow-sm">
            <div className="card-header bg-transparent border-primary text-primary fw-bold">
                User Status
            </div>
            <div className="card-body">
                <p className="card-text mb-1">
                    <span className="fw-bold">Name:</span> {user.name ?? "Guest User"}
                </p>
                <p className="card-text mb-2">
                    <span className="fw-bold">Email:</span> {user.email ?? "No email provided"}
                </p>
                {user.isActive && (
                    <span className="badge bg-success text-uppercase">Active User</span>
                )}
            </div>
        </div>
    );
};

export default UserStatus;
