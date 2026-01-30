import React, { useState } from 'react'
import { useToast } from './ToastProvider'

export default function Task2RangeValidation() {
  const [value, setValue] = useState('')
  const { showToast } = useToast()

  const handleSubmit = (e) => {
    e.preventDefault()
    const num = Number(value)
    if (!Number.isFinite(num)) {
      showToast('Invalid Number', 'error')
      return
    }

    if (num >= 50 && num <= 150 && num % 5 === 0) showToast('Valid Number', 'success')
    else showToast('Invalid Number', 'error')
  }

  return (
    <div className="task-card">
      <h3>Task 2: Range-Based Validation</h3>
      <form onSubmit={handleSubmit}>
        <input type="number" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter a number (50-150)" />
        <button type="submit">Validate</button>
      </form>
    </div>
  )
}
