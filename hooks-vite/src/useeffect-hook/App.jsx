import React, { useState } from 'react';

export const App = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
        console.log(count + 1);

    }

    return (
        <>
            <h1>Counter Application</h1>
            <h2>Counter : {count}</h2>
            <button onClick={increment}>Increase Value</button>
        </>
    )
}