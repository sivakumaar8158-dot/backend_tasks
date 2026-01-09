import React from 'react';

const Contact = () => {
    return (
        <div className="container py-4">
            <h1 className="display-5 fw-bold mb-4">Contact Page</h1>
            <div className="alert alert-info shadow-sm border-start border-4 border-info">
                <p className="mb-2">
                    This is the Contact page. Reach us at:
                </p>
                <a href="mailto:contact@example.com" className="fw-bold text-decoration-none">
                    contact@example.com
                </a>
            </div>
        </div>
    );
};

export default Contact;
