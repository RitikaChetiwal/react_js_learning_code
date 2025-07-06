import { useState } from "react";

export const Counterapp = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => Math.max(0, prev - 1));
    const reset = () => setCount(0);

    return (
        <div>
            <h1>Counter: {count}</h1>
            <div>
                <button onClick={increment} aria-label="Increment">Increment</button>
                <button onClick={decrement} aria-label="Decrement" disabled={count === 0}>Decrement</button>
                <button onClick={reset} aria-label="Reset">Reset</button>
            </div>
        </div>
    )
}