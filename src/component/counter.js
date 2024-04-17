import React, {useState, useEffect} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [isCounting, setIsCounting] = useState(false);

    useEffect(() => {
        let timer;
        if (isCounting) {
            timer = setInterval (() => {
             setCount (prevCount => prevCount + 1);
        }, 1000);
    } else {
        clearInterval(timer);
    }
    return () => clearInterval(timer);
    }, [isCounting]);

    const handleStart = () =>{
        setIsCounting(true);
    };
    const handlePause = () =>{
        setIsCounting(false);
    };
    return(
        <div> 
        <h2>Count Component {count}</h2>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        </div>
    );

};
export default Counter 