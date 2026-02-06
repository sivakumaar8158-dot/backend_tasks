import React from 'react';
import Counter from './components/Counter';
import ItemsList from './components/ItemsList';
import OptimizedForm from './components/OptimizedForm';
import ButtonSection from './components/ButtonSection';
import './App.css';

const App = () => {
    return (
        <div className="app-container">
            <header className="main-header">
                <h1>useCallback & React.memo Demo</h1>
                <p className="subtitle">Performance Optimization Patterns</p>
            </header>

            <div className="grid-layout">
                <Counter />
                <ItemsList />
                <OptimizedForm />
                <ButtonSection />
            </div>

            <footer className="main-footer">
                <p>Open Developer Console (F12) to see rendering logs</p>
            </footer>
        </div>
    );
};

export default App;
