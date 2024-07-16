import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

const Header = () => {
  const { auth } = useContext(AuthContext);
  console.log(auth?.currentUser);

  return (
    <header className="bg-blue-500 text-white py-4 sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">My Blog</Link>
        </div>
        <nav className="flex space-x-4">
          <Link to="/post" className="hover:text-gray-300">
            Add post
          </Link>
          <Link to="/auth" className="hover:text-gray-300">
            Owner? Login here
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
