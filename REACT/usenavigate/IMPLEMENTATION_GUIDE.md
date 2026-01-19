# useNavigate & useLocation React Router Project

A comprehensive demonstration of React Router's `useNavigate` and `useLocation` hooks with 5 different real-world examples.

## 🎯 Project Features

### 1. **Product Details Navigation** (`/products` → `/product-detail`)
- **Concept**: Passing data between pages using `useNavigate` state
- **Files**: `ProductList.jsx`, `ProductDetail.jsx`
- **Features**:
  - Navigate to product detail page with product object in state
  - Read product data using `useLocation`
  - Update price and discount using local React state (without modifying URL)
  - Calculate final price dynamically
  
**Code Example**:
```jsx
// Navigate with state
navigate('/product-detail', { state: { product } })

// Read from location
const location = useLocation()
const product = location.state?.product
```

### 2. **Profile Page with Query Parameters** (`/profile`)
- **Concept**: Reading user data from URL query parameters
- **Files**: `ProfilePage.jsx`
- **Features**:
  - Extract `name` and `age` from query parameters
  - Parse search string using `URLSearchParams`
  - Click on profiles to update the URL with new parameters
  - Dynamic rendering based on query params
  
**Code Example**:
```jsx
const location = useLocation()
const queryParams = new URLSearchParams(location.search)
const userName = queryParams.get('name')
const userAge = queryParams.get('age')
```

### 3. **Theme Switcher** (`/theme?theme=light|dark`)
- **Concept**: Reading theme from query params and dynamically applying styles
- **Files**: `ThemeSwitcher.jsx`
- **Features**:
  - Read `theme` query parameter (light/dark)
  - Apply conditional Tailwind CSS classes based on theme
  - Switch between themes without page reload
  - Bookmarkable theme preferences via URL
  
**Code Example**:
```jsx
const queryParams = new URLSearchParams(location.search)
const currentTheme = queryParams.get('theme') || 'light'

// Apply conditional styles
className={`bg-${currentTheme === 'light' ? 'white' : 'gray-800'}`}
```

### 4. **Order Management** (`/orders` → `/order-details`)
- **Concept**: Passing order data via location state and managing status locally
- **Files**: `OrderList.jsx`, `OrderDetails.jsx`
- **Features**:
  - Pass complete order object through location state
  - Read order details on detail page
  - Update order status using local component state
  - Status changes don't affect URL or location
  - Multiple status options (Pending, Processing, Shipped, Delivered, Cancelled)
  
**Code Example**:
```jsx
// Pass order
navigate('/order-details', { state: { order } })

// Manage status locally
const [orderStatus, setOrderStatus] = useState(order?.currentStatus)
// Status changes are local only
```

### 5. **Product Edit Form** (`/products-to-edit` → `/product-edit`)
- **Concept**: Receiving data via useLocation and modifying using React state
- **Files**: `ProductsToEdit.jsx`, `ProductEditForm.jsx`
- **Features**:
  - Navigate to edit form with product data in state
  - Populate form fields from received data
  - Modify all fields (name, description, price, stock, category)
  - Save functionality updates local state only
  - Track unsaved changes
  - Reset functionality
  
**Code Example**:
```jsx
// Navigate with product
navigate('/product-edit', { state: { product } })

// Form with local state management
const [formData, setFormData] = useState({
  name: productFromLocation?.name || '',
  price: productFromLocation?.price || '',
  // ...
})
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Home.jsx                 # Landing page with all features
│   ├── ProductList.jsx          # List products for navigation demo
│   ├── ProductDetail.jsx        # View & update product price
│   ├── ProfilePage.jsx          # Query params demo
│   ├── ThemeSwitcher.jsx        # Theme from query params
│   ├── OrderList.jsx            # List orders
│   ├── OrderDetails.jsx         # Manage order status
│   ├── ProductsToEdit.jsx       # Products for edit form
│   └── ProductEditForm.jsx      # Product edit form
├── App.jsx                      # Route definitions
├── main.jsx                     # BrowserRouter setup
└── index.css                    # Tailwind styles
```

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Running the Project
```bash
npm run dev
```

The app will open at `http://localhost:5173`

## 🔄 Key Differences: useNavigate vs useLocation

### useNavigate
- **Purpose**: Navigate between routes and pass data
- **Returns**: A function to navigate
- **Data**: Passed through location state (not visible in URL)
- **Persistence**: Data lost on page refresh
- **Security**: Better for sensitive data

```jsx
const navigate = useNavigate()
navigate('/page', { state: { data } })
```

### useLocation
- **Purpose**: Read current location and query parameters
- **Returns**: Location object with pathname, search, state, etc.
- **Data**: Can be from state or URL query params
- **Persistence**: Query params visible in URL (persists on refresh)
- **Security**: Don't pass sensitive data in query params

```jsx
const location = useLocation()
const data = location.state?.data
const params = new URLSearchParams(location.search)
```

## 💡 Best Practices

1. **Use Location State for**:
   - Complex objects
   - Sensitive data
   - Form data before submission
   - Navigation flow context

2. **Use Query Parameters for**:
   - Filters and sorting
   - Pagination
   - Search terms
   - Theme/preference settings
   - Data that should be bookmarkable

3. **Validation**:
   - Always check if `location.state` exists
   - Provide fallback values
   - Validate query parameter types

4. **Performance**:
   - Use `useCallback` for navigate functions
   - Debounce query parameter changes
   - Don't recreate objects unnecessarily

## 📝 Code Examples

### Example 1: Navigate with Object
```jsx
const handleNavigate = (product) => {
  navigate('/detail', { 
    state: { product } 
  })
}
```

### Example 2: Read Query Parameters
```jsx
const queryParams = new URLSearchParams(location.search)
const filter = queryParams.get('filter')
const sort = queryParams.get('sort')
```

### Example 3: Conditional Rendering Based on Location
```jsx
const handleEdit = () => {
  if (location.state?.data) {
    // Data available from navigation
  } else {
    // Fallback for direct URL access
  }
}
```

### Example 4: Update Local State Without Modifying Location
```jsx
const [localValue, setLocalValue] = useState(initialValue)

const handleChange = (e) => {
  setLocalValue(e.target.value)
  // Location remains unchanged
}
```

## 🎓 Learning Outcomes

After completing this project, you'll understand:

✓ How to pass data between routes using `useNavigate`
✓ How to read data using `useLocation`
✓ How to parse URL query parameters
✓ Difference between location state and query parameters
✓ When to use each approach
✓ How to implement common patterns (filters, forms, themes)
✓ State management without external libraries
✓ Component communication best practices

## 📚 React Router Documentation

- [useNavigate Hook](https://reactrouter.com/en/main/hooks/use-navigate)
- [useLocation Hook](https://reactrouter.com/en/main/hooks/use-location)
- [Location State](https://reactrouter.com/en/main/start/concepts#location)

## 🛠️ Technologies Used

- **React 19.2.0**: UI Library
- **React Router DOM 7.12.0**: Routing and navigation
- **Vite**: Build tool
- **Tailwind CSS 4.1.18**: Styling
- **JavaScript ES6+**: Modern JavaScript

## 📄 License

This project is open source and available under the MIT license.

---

**Happy Learning! 🎉**
