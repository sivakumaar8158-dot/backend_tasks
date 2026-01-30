import React, { useState, useEffect } from 'react'

export default function ApiTask6RemoveItem() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])

    const removeItem = (id) => {
        setData((prev) => prev.filter((item) => item.id !== id))
    }

    return (
        <div className="task-card">
            <h3>API Task 6: Remove Item</h3>
            <ul style={{ maxHeight: '150px', overflowY: 'auto', paddingLeft: '0' }}>
                {data.map((user) => (
                    <li key={user.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                        <span>{user.name}</span>
                        <button
                            onClick={() => removeItem(user.id)}
                            style={{ padding: '0.2rem 0.5rem', fontSize: '0.8rem', background: '#e11d48' }}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
