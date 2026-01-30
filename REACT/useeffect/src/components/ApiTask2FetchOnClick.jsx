import React, { useState } from 'react'

export default function ApiTask2FetchOnClick() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const handleFetch = () => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }

    return (
        <div className="task-card">
            <h3>API Task 2: Fetch on Click</h3>
            <button onClick={handleFetch}>Fetch Data</button>
            {loading && <p className="muted">Loading...</p>}
            {!loading && data.length > 0 && (
                <ul style={{ maxHeight: '150px', overflowY: 'auto', paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
                    {data.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}
