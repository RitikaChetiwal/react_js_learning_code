import { useState } from "react";

export const Counterapp = () => {

    const [count, setCount] = useState(0);

    // const increment = () => {
    //     setCount(count + 1)
    // }

    // const decrement = () => {
    //     setCount(count - 1)
    // }

    // const reset = () => {
    //     setCount(0);
    // }

    // Optimized Version ---------------------------------->

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }
    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    }
    const reset = () => {
        setCount(0);
    }
    const incrementByValue = (value) => {
        setCount(prevCount => prevCount + value);
    }

    return (
        <div className="cont">

            <h1>Counter: {count}</h1>
            <div className="buttons">
                <button onClick={() => increment()} aria-label="increment">Increment</button>
                <button onClick={() => decrement()}>Decrement</button>
                <button onClick={() => reset()}>Reset</button>
                <button onClick={() => incrementByValue(10)}>Add 10</button>
            </div>

        </div>
    )
}