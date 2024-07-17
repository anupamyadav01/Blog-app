import { createContext, useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

export const PostContext = createContext([]);

// eslint-disable-next-line react/prop-types
const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [postLoading, setPostLoading] = useState(true);

  const getDataFromFireStore = async () => {
    try {
      const fireStoreDB = getFirestore();
      const collectionRef = collection(fireStoreDB, "Posts");
      const collectionSnapshot = await getDocs(collectionRef);
      const postsFromFireStore = collectionSnapshot.docs.map((item) => ({
        ...item.data(),
        id: item.id,
      }));

      setPosts(postsFromFireStore);
      // console.log(fireStoreDB);
    } catch (error) {
      console.log(error);
    } finally {
      setPostLoading(false);
    }
  };

  useEffect(() => {
    getDataFromFireStore();
  }, []);

  return (
    <PostContext.Provider value={{ posts, setPosts, postLoading }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
