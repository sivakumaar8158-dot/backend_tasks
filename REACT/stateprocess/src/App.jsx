import React, { useState } from 'react'
import './App.css'

const App = () => {
 
  const [count, setCount] = useState(0)

  const increaseBy5 = () => {
    
    console.log('Before update, count:', count)
    setCount(prevCount => {
      console.log('Previous count in setter:', prevCount)
      return prevCount + 5
    })
    console.log('After setState call, count:', count) 
  }

  
  const [isVisible, setIsVisible] = useState(true)

  const toggleVisibility = () => {
    setIsVisible(prev => {
      console.log('Previous isVisible:', prev)
      return !prev
    })
  }

  
  const [numbers, setNumbers] = useState([])
  const [nextNumber, setNextNumber] = useState(1)

  const addNumber = () => {
    setNumbers(prevArray => {
      console.log('Previous array:', prevArray)
      return [...prevArray, nextNumber]
    })
    setNextNumber(prev => prev + 1)
  }

  
  const [counter, setCounter] = useState(0)
  const [updateLog, setUpdateLog] = useState([])

  const multipleUpdatesWithoutPrev = () => {
    console.log('=== WITHOUT PREV (Wrong) ===')
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1) 
    console.log('Log shows:', counter)
  }

  const multipleUpdatesWithPrev = () => {
    console.log('=== WITH PREV (Correct) ===')
    setCounter(prev => {
      console.log('First update, prev:', prev)
      return prev + 1
    })
    setCounter(prev => {
      console.log('Second update, prev:', prev)
      return prev + 1
    })
    setCounter(prev => {
      console.log('Third update, prev:', prev)
      return prev + 1
    })
  }

  
  const [submitCount, setSubmitCount] = useState(0)
  const [formData, setFormData] = useState({ email: '' })

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted!')
    
   
    setSubmitCount(prevCount => {
      console.log('Previous submit count:', prevCount)
      return prevCount + 1
    })
    
    
    setFormData({ email: '' })
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>React State Management Tasks</h1>

      
      <section style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '20px' }}>
        <h2>TASK 1: Counter with Previous State</h2>
        <p>
          <strong>Concept:</strong> Using previous state to ensure correct updates
        </p>
        <div style={{ background: '#f0f0f0', padding: '10px', marginBottom: '10px' }}>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Count: {count}</p>
          <p style={{ color: '#666' }}>
            Check console to see state batching in action!
          </p>
        </div>
        <button 
          onClick={increaseBy5}
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          Increase by 5 (using prev)
        </button>
        <p style={{ marginTop: '10px', fontSize: '12px', color: '#999' }}>
          ✓ Using setCount(prevCount =&gt; prevCount + 5)
        </p>
      </section>

     
      <section style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '20px' }}>
        <h2>TASK 2: Toggle Boolean Using Previous State</h2>
        <p>
          <strong>Concept:</strong> Toggle boolean by negating previous state
        </p>
        <div style={{ background: '#f0f0f0', padding: '10px', marginBottom: '10px' }}>
          {isVisible && (
            <p style={{ color: 'green', fontWeight: 'bold' }}>✓ This text is VISIBLE!</p>
          )}
          {!isVisible && (
            <p style={{ color: 'red', fontWeight: 'bold' }}>✗ This text is HIDDEN!</p>
          )}
        </div>
        <button 
          onClick={toggleVisibility}
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          Toggle Visibility
        </button>
        <p style={{ marginTop: '10px', fontSize: '12px', color: '#999' }}>
          ✓ Using setIsVisible(prev =&gt; !prev)
        </p>
      </section>

      
      <section style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '20px' }}>
        <h2>TASK 3: Array Add Using Previous State</h2>
        <p>
          <strong>Concept:</strong> Add items to array using previous array state
        </p>
        <div style={{ background: '#f0f0f0', padding: '10px', marginBottom: '10px' }}>
          <p>
            <strong>Numbers array:</strong> [{numbers.join(', ')}]
          </p>
          <p style={{ color: '#666' }}>Next number to add: {nextNumber}</p>
        </div>
        <button 
          onClick={addNumber}
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          Add Next Number
        </button>
        <p style={{ marginTop: '10px', fontSize: '12px', color: '#999' }}>
          ✓ Using setNumbers(prevArray =&gt; [...prevArray, nextNumber])
        </p>
      </section>

     
      <section style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '20px' }}>
        <h2>TASK 4: Multiple State Updates in One Click</h2>
        <p>
          <strong>Concept:</strong> State batching issue and how prev fixes it
        </p>
        <div style={{ background: '#f0f0f0', padding: '10px', marginBottom: '10px' }}>
          <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Counter: {counter}</p>
          <p style={{ color: '#666', fontSize: '12px' }}>
            Check console to see the difference in state updates!
          </p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={multipleUpdatesWithoutPrev}
            style={{ padding: '10px 20px', fontSize: '14px', cursor: 'pointer', background: '#ffcccc' }}
          >
            Click 3x (WITHOUT prev) - ❌ Only +1
          </button>
          <button 
            onClick={multipleUpdatesWithPrev}
            style={{ padding: '10px 20px', fontSize: '14px', cursor: 'pointer', background: '#ccffcc' }}
          >
            Click 3x (WITH prev) - ✓ +3
          </button>
        </div>
        <p style={{ marginTop: '10px', fontSize: '12px', color: '#999' }}>
          ✓ Without prev: All updates use same counter value<br/>
          ✓ With prev: Each update builds on the last one
        </p>
      </section>

      
      <section style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '20px' }}>
        <h2>TASK 5: Form Submit Counter</h2>
        <p>
          <strong>Concept:</strong> Count form submissions using previous state
        </p>
        <div style={{ background: '#f0f0f0', padding: '10px', marginBottom: '10px' }}>
          <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
            Form submitted {submitCount} time{submitCount !== 1 ? 's' : ''}
          </p>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label>
              Email:{' '}
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ email: e.target.value })}
                style={{ padding: '8px', width: '200px' }}
                placeholder="Enter email"
              />
            </label>
          </div>
          <button 
            type="submit"
            style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
          >
            Submit Form
          </button>
        </form>
        <p style={{ marginTop: '10px', fontSize: '12px', color: '#999' }}>
          ✓ Using setSubmitCount(prevCount =&gt; prevCount + 1)
        </p>
      </section>

      
      <section style={{ border: '2px solid #0066cc', padding: '15px', background: '#e6f2ff' }}>
        <h3>📋 How to Use:</h3>
        <ol>
          <li>Open browser DevTools console (F12 or Right-click → Inspect → Console)</li>
          <li>Click buttons and watch console logs to understand state updates</li>
          <li>Compare results between different update methods</li>
          <li>Notice how previous state ensures correct increments</li>
        </ol>
        <p style={{ marginTop: '10px', fontWeight: 'bold', color: '#0066cc' }}>
          Key Takeaway: Always use (prev) =&gt; ... when your new state depends on the old state!
        </p>
      </section>
    </div>
  )
}

export default App