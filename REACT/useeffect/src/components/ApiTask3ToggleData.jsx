import React, { useState, useEffect } from 'react'

export default function ApiTask3ToggleData() {
    const [data, setData] = useState([])
    const [show, setShow] = useState(false)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])

    return (
        <div className="task-card">
            <h3>API Task 3: Toggle Data</h3>
            <button onClick={() => setShow(!show)}>{show ? 'Hide Data' : 'Show Data'}</button>
            {show && (
                <ul style={{ maxHeight: '150px', overflowY: 'auto', paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
                    {data.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}
