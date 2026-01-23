import { useState } from 'react';

const withCount = (Component) => {
  return function EnhancedComponent(props) {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
      <Component
        count={count}
        increment={increment}
        decrement={decrement}
        reset={reset}
        {...props}
      />
    );
  };
};

export default withCount;
