import React, { useState, useEffect } from 'react'

export default function ApiTask5ReverseOrder() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])

    const toggleReverse = () => {
        setData([...data].reverse())
    }

    return (
        <div className="task-card">
            <h3>API Task 5: Reverse Order</h3>
            <button onClick={toggleReverse}>Reverse</button>
            <ul style={{ maxHeight: '150px', overflowY: 'auto', paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
                {data.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}
