import React, { useState } from 'react'
import { useToast } from './ToastProvider'

export default function Task5ConditionalReset() {
  const [value, setValue] = useState('')
  const { showToast } = useToast()

  const handleSubmit = (e) => {
    e.preventDefault()
    const num = Number(value)
    if (!Number.isFinite(num)) {
      showToast('Normal Number', 'error')
      return
    }

    if (num % 3 === 0 && num % 5 === 0) {
      showToast('Special Number', 'success')
      setValue('')
    } else {
      showToast('Normal Number', 'success')
    }
  }

  return (
    <div className="task-card">
      <h3>Task 5: Conditional Reset Logic</h3>
      <form onSubmit={handleSubmit}>
        <input type="number" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter a number" />
        <button type="submit">Check</button>
      </form>
    </div>
  )
}
