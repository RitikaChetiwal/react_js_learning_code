import { createContext, useState } from "react";

export const AppContext = createContext();
export const CounterProvider = ({ children }) => {

    let [count, setCount] = useState(0);

    const increment = () => {
        count++
        setCount(count);
        console.log(count);
    }

    const decrement = () => {
        count--
        setCount(count);
        console.log(count);
    }

    const reset = () => {
        count = 0;
        setCount(count);
        console.log(count);
    }

    return (
        <AppContext.CounterProvider value = {{ increment, decrement, reset }}>
            <h1>Counter Application</h1>
            <h2>Counter:{count}</h2>
            {children}
        </AppContext.CounterProvider>
    )
}