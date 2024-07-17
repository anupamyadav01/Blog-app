import { createContext, useEffect, useState } from "react";
import app from "../../config/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";

export const AuthContext = createContext();
// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({ children }) => {
  const [authInstance, setAuthInstance] = useState(null);

  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    loading: true,
    user: null,
  });
  useEffect(() => {
    const auth = getAuth(app);
    setAuthInstance(auth);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthState({
          isAuthenticated: true,
          user,
          loading: false,
        });
        toast.success("Login Successfull");
      } else {
        setAuthState({
          isAuthenticated: false,
          user: null,
          loading: false,
        });
      }
    });
  }, []);
  return (
    <AuthContext.Provider value={{ authState, authInstance }}>
      {children}
      <Toaster />
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
