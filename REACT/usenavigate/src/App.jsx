import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'
import ProfilePage from './components/ProfilePage'
import ThemeSwitcher from './components/ThemeSwitcher'
import OrderList from './components/OrderList'
import OrderDetails from './components/OrderDetails'
import ProductsToEdit from './components/ProductsToEdit'
import ProductEditForm from './components/ProductEditForm'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/product-detail" element={<ProductDetail />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/theme" element={<ThemeSwitcher />} />
      <Route path="/orders" element={<OrderList />} />
      <Route path="/order-details" element={<OrderDetails />} />
      <Route path="/products-to-edit" element={<ProductsToEdit />} />
      <Route path="/product-edit" element={<ProductEditForm />} />
    </Routes>
  )
}

export default App