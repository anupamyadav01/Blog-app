import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const {
    authInstance,
    authState: { isAuthenticated },
  } = useContext(AuthContext);
  const navigate = useNavigate();
  if (isAuthenticated) {
    navigate("/");
  }
  const handleLoginWithGoogle = async () => {
    try {
      const googleProvider = new GoogleAuthProvider();
      await signInWithPopup(authInstance, googleProvider);

      navigate("/");
    } catch (error) {
      throw new Error("new error for auth.jsx", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <button
          onClick={handleLoginWithGoogle}
          className="text-xl items-center justify-center w-full py-2 px-2 shadow font-semibold rounded-lg flex gap-3"
        >
          <FcGoogle />
          <span>Login with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Auth;
