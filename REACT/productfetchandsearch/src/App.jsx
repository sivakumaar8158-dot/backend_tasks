import ProductList from './ProductList';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-black text-white py-6 shadow-md mb-6">
        <h1 className="text-4xl text-center font-bold tracking-tight">YourStore App</h1>
      </div>
      <ProductList />
    </div>
  )
}

export default App