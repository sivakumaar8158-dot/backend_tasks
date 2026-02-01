import React, { useRef } from 'react';

const Task4 = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        alert(`Name: ${name}\nEmail: ${email}`);
    };

    return (
        <div className="task-container">
            <h3>Task 4: Uncontrolled Form</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input ref={nameRef} type="text" />
                </div>
                <div>
                    <label>Email: </label>
                    <input ref={emailRef} type="email" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Task4;
