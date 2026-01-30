import React, { useState, useEffect } from 'react'

export default function ApiTask7SearchFilter() {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])

    const filteredData = data.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="task-card">
            <h3>API Task 7: Search Filter</h3>
            <input
                type="text"
                placeholder="Search by name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul style={{ maxHeight: '150px', overflowY: 'auto', paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
                {filteredData.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}
