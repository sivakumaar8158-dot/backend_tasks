
import React, { useState, useMemo, useEffect } from 'react';
import './App.css';


const heavyCalculation = (num) => {
    console.log('🔄 Heavy Calculation Running...');
    let result = 0;
    for (let i = 0; i < 50000000; i++) {
        result += num;
    }
    return result;
};

const calculateFactorial = (n) => {
    console.log('🔄 Factorial Calculation Running...');
    if (n < 0) return 0;
    if (n === 0) return 1;
    return n * calculateFactorial(n - 1);
};



const HeavyCounter = ({ count, setCount }) => {

    const heavyResult = useMemo(() => heavyCalculation(count), [count]);

    return (
        <div className="card">
            <h2>1. Heavy Counter</h2>
            <p>Calculation runs only when count changes.</p>
            <div className="control-group">
                <button className="action-btn" onClick={() => setCount((c) => c - 1)}>-</button>
                <span className="stat-value">{count}</span>
                <button className="action-btn" onClick={() => setCount((c) => c + 1)}>+</button>
            </div>
            <p>Result: <strong>{heavyResult}</strong></p>
        </div>
    );
};

const ProductDashboard = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=50')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
                setLoading(false);
            });
    }, []);


    const totalPrice = useMemo(() => {
        console.log('🔄 Calculating Total Price...');
        return products.reduce((total, product) => total + product.price, 0);
    }, [products]);

    return (
        <div className="card">
            <h2>2. Product Dashboard</h2>
            <p>Total re-calcs only on fetched data change.</p>
            {loading ? (
                <p>Loading products...</p>
            ) : (
                <>
                    <div className="stat-value">${totalPrice.toLocaleString()}</div>
                    <p>{products.length} Products Loaded</p>
                    <div className="list-container">
                        {products.map((p) => (
                            <div key={p.id} className="list-item" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>{p.title}</span>
                                <span className="badge">${p.price}</span>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

const SearchFilter = () => {
    const [items] = useState(() => {

        const arr = [];
        for (let i = 0; i < 1000; i++) {
            arr.push(`Item ${i + 1} - ${Math.random().toString(36).substring(7)}`);
        }
        return arr;
    });
    const [search, setSearch] = useState('');


    const filteredItems = useMemo(() => {
        console.log('🔄 Filtering Items...');
        return items.filter((item) => item.toLowerCase().includes(search.toLowerCase()));
    }, [items, search]);

    return (
        <div className="card">
            <h2>3. Search Optimization</h2>
            <p>Filtering 1000 items with useMemo.</p>
            <input
                type="text"
                placeholder="Search items..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <p>Found: {filteredItems.length}</p>
            <div className="list-container">
                {filteredItems.map((item, idx) => (
                    <div key={idx} className="list-item">{item}</div>
                ))}
            </div>
        </div>
    );
};

const FactorialCalc = () => {
    const [num, setNum] = useState(5);


    const factorial = useMemo(() => calculateFactorial(num), [num]);

    return (
        <div className="card">
            <h2>4. Factorial Calculator</h2>
            <p>Recalculates only when input number changes.</p>
            <input
                type="number"
                value={num}
                onChange={(e) => setNum(parseInt(e.target.value) || 0)}
                min="0"
                max="15"
            />
            <div className="stat-value" style={{ fontSize: '2rem', marginTop: '1rem' }}>
                {factorial}
            </div>
        </div>
    );
};

const SortedList = () => {
    const [numbers, setNumbers] = useState(() => Array.from({ length: 50 }, () => Math.floor(Math.random() * 1000)));


    const sortedNumbers = useMemo(() => {
        console.log('🔄 Sorting Array...');
        return [...numbers].sort((a, b) => a - b);
    }, [numbers]);

    const regenerate = () => {
        setNumbers(Array.from({ length: 50 }, () => Math.floor(Math.random() * 1000)));
    };

    return (
        <div className="card">
            <h2>5. Sorted List</h2>
            <p>Sorting memoized independently of theme.</p>
            <button className="action-btn" onClick={regenerate}>Regenerate Array</button>
            <div className="list-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {sortedNumbers.map((n, i) => (
                    <span key={i} className="badge" style={{ background: 'var(--secondary-gradient)' }}>{n}</span>
                ))}
            </div>
        </div>
    );
};



function App() {
    const [theme, setTheme] = useState('light');
    const [count, setCount] = useState(0);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <div className="app-main">
            <div className="app-container">
                <header>
                    <h1>🚀 useMemo Demo</h1>
                    <button className="theme-toggle" onClick={toggleTheme}>
                        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
                    </button>
                </header>

                <section className="grid-container">

                    <HeavyCounter count={count} setCount={setCount} />



                    <ProductDashboard />
                    <SearchFilter />
                    <FactorialCalc />
                    <SortedList />
                </section>

                <footer style={{ textAlign: 'center', opacity: 0.7, marginTop: '2rem' }}>
                    <p>Check the console to see when calculations run!</p>
                </footer>
            </div>
        </div>
    );
}

export default App;
