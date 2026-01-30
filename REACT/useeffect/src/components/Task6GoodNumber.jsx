import React, { useState } from 'react'
import { useToast } from './ToastProvider'

export default function Task6GoodNumber() {
  const [value, setValue] = useState('')
  const { showToast } = useToast()

  const handleSubmit = (e) => {
    e.preventDefault()
    const num = Number(value)
    if (!Number.isFinite(num)) {
      showToast('Not a Good Number', 'error')
      return
    }

    // Same rules as Task 1: 10,20,...,100
    if (num >= 10 && num <= 100 && num % 10 === 0) showToast('Good Number', 'success')
    else showToast('Not a Good Number', 'error')
  }

  return (
    <div className="task-card">
      <h3>Task 6: Good Number Checker (duplicate)</h3>
      <form onSubmit={handleSubmit}>
        <input type="number" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter a number (10..100 step 10)" />
        <button type="submit">Check</button>
      </form>
    </div>
  )
}
