import React, { useState } from 'react'
import { useToast } from './ToastProvider'

export default function Task3AttemptLimited() {
  const [value, setValue] = useState('')
  const [count, setCount] = useState(0)
  const { showToast } = useToast()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (count >= 3) {
      showToast('Limit Reached', 'error')
      return
    }

    const newCount = count + 1
    setCount(newCount)

    if (newCount >= 3) {
      // On the 3rd submit show the "Limit Reached" message and block further submits
      showToast('Limit Reached', 'error')
    } else {
      showToast(`Submitted (${newCount})`, 'success')
    }
  }

  return (
    <div className="task-card">
      <h3>Task 3: Attempt-Limited Submit</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter something" />
        <button type="submit" disabled={count >= 3}>
          Submit
        </button>
      </form>
      <p className="muted">Attempts: {count} / 3</p>
    </div>
  )
}
