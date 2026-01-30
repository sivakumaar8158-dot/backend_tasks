import React, { useState, useEffect } from 'react'

export default function ApiTask4LimitRecords() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])

    return (
        <div className="task-card">
            <h3>API Task 4: Limit 5</h3>
            <ul style={{ maxHeight: '150px', overflowY: 'auto', paddingLeft: '1.2rem' }}>
                {data.slice(0, 5).map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}
