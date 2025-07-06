import React, { createContext, useState } from "react";

export const AuthContext = createContext(); //Creation of context

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "Ajay", email: "test@text.com" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
