import { useContext } from "react";
import { PostContext } from "../../contexts/posts";
import { AuthContext } from "../../contexts/auth";
import PacmanLoader from "react-spinners/PacmanLoader";
const Home = () => {
  const { posts, postLoading } = useContext(PostContext);
  // console.log(posts.length);
  const {
    authState: { isAuthenticated },
  } = useContext(AuthContext);

  // if (postLoading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen w-full"></div>
  //   );
  // }

  return (
    <>
      {postLoading ? (
        <div className="flex justify-center items-center h-screen w-full">
          <PacmanLoader color="#36d7b7" />
        </div>
      ) : (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Posts</h2>
          {isAuthenticated ? (
            posts.length > 0 ? (
              <div className="space-y-4">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="p-4 border border-gray-300 rounded-lg"
                  >
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p>{post.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No posts available.</p>
            )
          ) : (
            <p className="text-gray-500">Please login to view posts.</p>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
