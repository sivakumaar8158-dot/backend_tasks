import React, { useState, useEffect } from 'react'

export default function ApiTask10NoData() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])

    const clearData = () => {
        setData([])
    }

    return (
        <div className="task-card">
            <h3>API Task 10: No Data Message</h3>
            <button onClick={clearData} style={{ background: '#e11d48' }}>Clear List</button>
            {data.length === 0 ? (
                <p style={{ marginTop: '1rem', color: '#dc2626', fontWeight: 'bold' }}>No Data Found</p>
            ) : (
                <ul style={{ maxHeight: '150px', overflowY: 'auto', paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
                    {data.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}
