import { createContext } from "react";

export const MyContext = createContext();
// export const MessageContext = createContext();

export const MyProvider = ({ children }) => {
    const message = 'Hi there! How are you?';
    return (
        <MyContext.Provider value={{ message }}>
            {children}
        </MyContext.Provider>
    )
}