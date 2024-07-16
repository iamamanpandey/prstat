"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebaseConfig";
import { User as FirebaseUser } from "firebase/auth";

type ChildProp = {
  children: React.ReactNode;
};
type AuthContextProvider = {
  user: FirebaseUser|null;
  loading: boolean;
};

const AuthContext = createContext<AuthContextProvider | undefined>(undefined);
export const AuthProvider = ({ children }: ChildProp) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
