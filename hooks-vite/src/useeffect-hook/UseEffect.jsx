import React, { useEffect, useState } from 'react';

export const UseEffect = () => {

    const [count, setCount] = useState(0);

  
        const increment = () => {
            setCount(prevCount => prevCount + 1);
            console.log(count + 1);

        }

        useEffect(() => {
            console.log(`count has changed: ${count}`);
            
        }, [count])

    return (
        <>
            <h1>Counter Application</h1>
            <h2>Counter : {count}</h2>
            <button onClick={increment}>Increase Value</button>
        </>
    )
}