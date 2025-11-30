import React, { createContext, useEffect, useState } from "react";
import { onUserStateChanged } from "../services/authService";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen to user auth changes
    const unsubscribe = onUserStateChanged((u) => setUser(u));
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
}