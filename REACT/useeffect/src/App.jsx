
import './App.css'
import ToastProvider from './components/ToastProvider'
import Task1GoodNumber from './components/Task1GoodNumber'
import Task2RangeValidation from './components/Task2RangeValidation'
import Task3AttemptLimited from './components/Task3AttemptLimited'
import Task4PatternCheck from './components/Task4PatternCheck'
import Task5ConditionalReset from './components/Task5ConditionalReset'
import Task6GoodNumber from './components/Task6GoodNumber'

import ApiTask1FetchOnLoad from './components/ApiTask1FetchOnLoad'
import ApiTask2FetchOnClick from './components/ApiTask2FetchOnClick'
import ApiTask3ToggleData from './components/ApiTask3ToggleData'
import ApiTask4LimitRecords from './components/ApiTask4LimitRecords'
import ApiTask5ReverseOrder from './components/ApiTask5ReverseOrder'
import ApiTask6RemoveItem from './components/ApiTask6RemoveItem'
import ApiTask7SearchFilter from './components/ApiTask7SearchFilter'
import ApiTask8FetchCount from './components/ApiTask8FetchCount'
import ApiTask9Sort from './components/ApiTask9Sort'
import ApiTask10NoData from './components/ApiTask10NoData'

const App = () => {
  return (
    <ToastProvider>
      <div className="app">
        <h1>Validation Tasks with Toasts</h1>
        <div className="grid">
          <Task1GoodNumber />
          <Task2RangeValidation />
          <Task3AttemptLimited />
          <Task4PatternCheck />
          <Task5ConditionalReset />
          <Task6GoodNumber />
        </div>

        <h1 style={{ marginTop: '3rem' }}>API Integration Tasks</h1>
        <div className="grid">
          <ApiTask1FetchOnLoad />
          <ApiTask2FetchOnClick />
          <ApiTask3ToggleData />
          <ApiTask4LimitRecords />
          <ApiTask5ReverseOrder />
          <ApiTask6RemoveItem />
          <ApiTask7SearchFilter />
          <ApiTask8FetchCount />
          <ApiTask9Sort />
          <ApiTask10NoData />
        </div>
      </div>
    </ToastProvider>
  )
}

export default App