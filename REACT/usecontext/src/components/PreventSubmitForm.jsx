import React, { useRef } from 'react';

const PreventSubmitForm = () => {
    const btnRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        
        if (btnRef.current) {
            btnRef.current.disabled = true;
            btnRef.current.innerText = "Submitting...";
            btnRef.current.classList.add('bg-gray-400', 'cursor-not-allowed');
            btnRef.current.classList.remove('bg-blue-500', 'hover:bg-blue-600');
        }

        console.log("Form submitted");


        setTimeout(() => {
            if (btnRef.current) {
                btnRef.current.disabled = false;
                btnRef.current.innerText = "Register";
                btnRef.current.classList.remove('bg-gray-400', 'cursor-not-allowed');
                btnRef.current.classList.add('bg-blue-500', 'hover:bg-blue-600');
            }
        }, 3000);
    };

    return (
        <div className="p-4 border rounded shadow-md max-w-md mx-auto mt-4">
            <h2 className="text-xl font-bold mb-4">Task 4: Prevent Multiple Submits</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <label className="font-semibold">Username:</label>
                <input type="text" className="border p-2 rounded" placeholder="Enter username" required />
                <button
                    ref={btnRef}
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default PreventSubmitForm;
