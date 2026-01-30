import React, { useState } from 'react'
import { useToast } from './ToastProvider'

export default function Task4PatternCheck() {
  const [value, setValue] = useState('')
  const { showToast } = useToast()

  const handleSubmit = (e) => {
    e.preventDefault()
    const num = Number(value)
    if (!Number.isFinite(num)) {
      showToast('Rejected Number', 'error')
      return
    }

    const s = String(Math.abs(Math.trunc(num)))
    if (s.length === 4 && s.startsWith('9')) showToast('Accepted Number', 'success')
    else showToast('Rejected Number', 'error')
  }

  return (
    <div className="task-card">
      <h3>Task 4: Pattern-Based Number Check</h3>
      <form onSubmit={handleSubmit}>
        <input type="number" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter a 4-digit number starting with 9" />
        <button type="submit">Check</button>
      </form>
    </div>
  )
}
