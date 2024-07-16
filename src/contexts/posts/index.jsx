import { createContext, useState } from "react";

export const PostContext = createContext([]);

// eslint-disable-next-line react/prop-types
const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
