import { useState } from 'react';
import PropTypes from 'prop-types';

const Counter=({ count, onIncrement, onDecrement }) => {
    return (
        <div style={{ border: '1px solid #ddd', padding: '10px', marginTop: '10px' }}>
            <h4>Counter Child</h4>
            <p>Count in child (props): {count}</p>
            <button onClick={onIncrement} style={{ marginRight: '5px' }}>+</button>
            <button onClick={onDecrement}>-</button>
        </div>
    );
}

Counter.propTypes = {
    count: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
};

function CounterApp() {
    const [totalCount, setTotalCount] = useState(0);

    const increment = () => setTotalCount(prev => prev + 1);
    const decrement = () => setTotalCount(prev => prev - 1);

    return (
        <div>
            <h3>Task 3: Counter App (Parent-Child Callback)</h3>
            <p>Total Count (Parent State): {totalCount}</p>
            <Counter
                count={totalCount}
                onIncrement={increment}
                onDecrement={decrement}
            />
        </div>
    );
}

export default CounterApp;
