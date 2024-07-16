import { createContext, useEffect, useState } from "react";
import app from "../../config/firebase";
import { getAuth } from "firebase/auth";

export const AuthContext = createContext();
// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(null);
  useEffect(() => {
    const auth = getAuth(app);
    setAuth(auth);
    setUser(auth.currentUser);
  }, []);
  return (
    <AuthContext.Provider value={{ user, auth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
