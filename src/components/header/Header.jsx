import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";

const Header = () => {
  const {
    authState: { isAuthenticated },
    authInstance,
  } = useContext(AuthContext);
  // const {  } = useContext(AuthContext);

  return (
    <header className="bg-blue-500 text-white py-4 sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">My Blog</Link>
        </div>
        <nav className="flex space-x-4">
          {isAuthenticated ? (
            <Link to="/post" className="hover:text-gray-300">
              Add post
            </Link>
          ) : null}
          {isAuthenticated ? (
            <button
              onClick={async () => {
                await signOut(authInstance);
                // console.log(data);
                toast.success("Logged Out");
              }}
            >
              Logout
            </button>
          ) : (
            <Link to="/auth" className="hover:text-gray-300">
              Owner? Login here
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
