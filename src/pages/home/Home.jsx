import { useContext } from "react";
import { PostContext } from "../../contexts/posts";

const Home = () => {
  const { posts } = useContext(PostContext);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Posts</h2>
      {posts.length > 0 ? (
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
      )}
    </div>
  );
};

export default Home;
