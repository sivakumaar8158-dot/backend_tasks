import React from 'react';
import reactLogo from '../assets/react.svg';

const ProfileCardFn = () => {
    return (
        <div className="card text-center shadow-sm" style={{ width: '18rem' }}>
            <div className="card-body">
                <img
                    src={reactLogo}
                    alt="Profile Avatar"
                    className="rounded-circle mb-3 border-2 border-primary"
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                />
                <h5 className="card-title fw-bold">React Developer</h5>
                <p className="card-text text-muted">Building awesome UIs with Bootstrap</p>
            </div>
        </div>
    );
};

export default ProfileCardFn;
