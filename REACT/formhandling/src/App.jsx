import { useState } from 'react'
import './App.css'

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    number: ''
  })

  const [submittedData, setSubmittedData] = useState(null)
  const [numbers, setNumbers] = useState([])
  const [ageError, setAgeError] = useState('')
  const [numberError, setNumberError] = useState('')

  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    setAgeError('')
    setNumberError('')

    
    if (parseInt(formData.age) < 18) {
      setAgeError('⚠️ You are not eligible. Age must be 18 or older.')
      setSubmittedData(null)
      return
    }

    
    setSubmittedData({
      name: formData.name,
      age: formData.age
    })
  }

  
  const handleAddNumber = () => {
    const num = parseInt(formData.number)

    if (isNaN(num)) {
      setNumberError('⚠️ Please enter a valid number')
      return
    }

    setNumberError('')

    
    setNumbers([...numbers, num])
    setFormData({ ...formData, number: '' })
  }

  return (
    <div className='min-h-screen bg-linear-to-br from-blue-100 to-purple-100 p-8'>
      <div className='max-w-2xl mx-auto'>
        <h1 className='text-4xl font-bold text-center mb-8 text-gray-800'>
          Form Handling Demo
        </h1>

       
        <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Name:
              </label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Enter your name'
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                required
              />
              {formData.name && (
                <p className='mt-2 text-green-600 font-semibold'>
                  ✓ Name: {formData.name}
                </p>
              )}
            </div>

        
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Age:
              </label>
              <input
                type='number'
                name='age'
                value={formData.age}
                onChange={handleChange}
                placeholder='Enter your age'
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                required
              />
              {formData.age && !ageError && (
                <p className='mt-2 text-green-600 font-semibold'>
                  ✓ Age: {formData.age}
                </p>
              )}
            </div>

           
            {ageError && (
              <div className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                {ageError}
              </div>
            )}

            
            <button
              type='submit'
              className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200'
            >
              Submit Form
            </button>
          </form>

          
          {submittedData && (
            <div className='mt-8 bg-green-50 border-l-4 border-green-500 p-6'>
              <h2 className='text-xl font-bold text-green-800 mb-4'>
                ✓ Form Data Submitted Successfully
              </h2>
              <div className='space-y-2'>
                <p className='text-gray-700'>
                  <span className='font-semibold'>Name:</span> {submittedData.name}
                </p>
                <p className='text-gray-700'>
                  <span className='font-semibold'>Age:</span> {submittedData.age}
                </p>
                <p className='text-gray-700'>
                  <span className='font-semibold'>Status:</span>{' '}
                  <span className='text-green-600 font-bold'>Eligible ✓</span>
                </p>
              </div>
            </div>
          )}
        </div>

        
        <div className='bg-white rounded-lg shadow-lg p-8'>
          <h2 className='text-2xl font-bold text-gray-800 mb-6'>
            Number List Validator
          </h2>

          
          <div className='flex gap-2 mb-6'>
            <input
              type='number'
              name='number'
              value={formData.number}
              onChange={handleChange}
              placeholder='Enter a number'
              className='flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
            />
            <button
              onClick={handleAddNumber}
              className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition duration-200'
            >
              Add Number
            </button>
          </div>

          
          {numberError && (
            <div className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6'>
              {numberError}
            </div>
          )}

          
          {numbers.length > 0 && (
            <div>
              <h3 className='text-lg font-semibold text-gray-700 mb-4'>
                Number Array:
              </h3>
              <div className='space-y-2'>
                {numbers.map((num, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg font-semibold flex items-center gap-3 ${
                      num % 2 === 0
                        ? 'bg-green-100 text-green-800 border-l-4 border-green-500'
                        : 'bg-red-100 text-red-800 border-l-4 border-red-500'
                    }`}
                  >
                    <span className='text-xl font-bold'>{num}</span>
                    <span>
                      {num % 2 === 0
                        ? '✓ Even Number'
                        : '✗ This is not an even number'}
                    </span>
                  </div>
                ))}
              </div>

              
              <div className='mt-6 p-4 bg-gray-50 rounded-lg'>
                <p className='text-gray-700 mb-2'>
                  <span className='font-semibold'>Total Numbers:</span> {numbers.length}
                </p>
                <p className='text-gray-700 mb-2'>
                  <span className='font-semibold'>Even Numbers:</span>{' '}
                  <span className='text-green-600 font-bold'>
                    {numbers.filter(n => n % 2 === 0).length}
                  </span>
                </p>
                <p className='text-gray-700'>
                  <span className='font-semibold'>Odd Numbers:</span>{' '}
                  <span className='text-red-600 font-bold'>
                    {numbers.filter(n => n % 2 !== 0).length}
                  </span>
                </p>
              </div>

             
              <button
                onClick={() => setNumbers([])}
                className='mt-4 w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200'
              >
                Clear All Numbers
              </button>
            </div>
          )}

          {numbers.length === 0 && (
            <p className='text-gray-500 text-center py-8'>
              No numbers added yet. Enter a number and click "Add Number" to start.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default App