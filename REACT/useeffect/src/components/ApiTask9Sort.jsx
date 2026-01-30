import React, { useState, useEffect } from 'react'

export default function ApiTask9Sort() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])

    const sortData = () => {
        const sorted = [...data].sort((a, b) => a.name.localeCompare(b.name))
        setData(sorted)
    }

    return (
        <div className="task-card">
            <h3>API Task 9: Sort Alphabetically</h3>
            <button onClick={sortData}>Sort A-Z</button>
            <ul style={{ maxHeight: '150px', overflowY: 'auto', paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
                {data.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}
