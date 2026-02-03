import { useState, useRef } from 'react';

const useTimer = (initialSeconds = 0) => {
    const [seconds, setSeconds] = useState(initialSeconds);
    const [isActive, setIsActive] = useState(false);
    const countRef = useRef(null);

    const start = () => {
        if (!isActive) {
            setIsActive(true);
            countRef.current = setInterval(() => {
                setSeconds((seconds) => seconds + 1);
            }, 1000);
        }
    };

    const stop = () => {
        setIsActive(false);
        clearInterval(countRef.current);
    };

    const reset = () => {
        stop();
        setSeconds(initialSeconds);
    };

    return { seconds, isActive, start, stop, reset };
};

export default useTimer;
