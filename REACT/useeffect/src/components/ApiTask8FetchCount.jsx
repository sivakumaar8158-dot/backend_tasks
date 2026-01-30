import React, { useState } from 'react'

export default function ApiTask8FetchCount() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [fetched, setFetched] = useState(false)

    const handleFetch = () => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
                setFetched(true)
            })
    }

    return (
        <div className="task-card">
            <h3>API Task 8: Fetch & Count</h3>
            <button onClick={handleFetch}>Fetch Data</button>
            {loading && <p className="muted">Loading...</p>}
            {fetched && !loading && (
                <p style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>Total Records: {data.length}</p>
            )}
        </div>
    )
}
