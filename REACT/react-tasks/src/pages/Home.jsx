import React from 'react';
import ProfileCardFn from '../components/ProfileCardFn';
import RenderingPlayground from '../components/RenderingPlayground';
import UserStatus from '../components/UserStatus';

const Home = ({ user }) => {
    return (
        <div className="container py-4">
            <h1 className="display-4 fw-bold mb-5 border-bottom pb-3">Home Page</h1>

            <section className="mb-5">
                <h2 className="h3 mb-4 d-flex align-items-center">
                    <span className="badge bg-primary me-2">Task 1</span>
                    Profile Card
                </h2>
                <div className="d-flex justify-content-center justify-content-md-start">
                    <ProfileCardFn />
                </div>
            </section>

            <section className="mb-5">
                <h2 className="h3 mb-4 d-flex align-items-center">
                    <span className="badge bg-primary me-2">Task 2</span>
                    Rendering Playground
                </h2>
                <RenderingPlayground />
            </section>

            <section className="mb-5">
                <h2 className="h3 mb-4 d-flex align-items-center">
                    <span className="badge bg-primary me-2">Task 3</span>
                    User Status
                </h2>
                <UserStatus user={user} />
            </section>
        </div>
    );
};

export default Home;
