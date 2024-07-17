import { useContext, useState } from "react";
import { PostContext } from "../../contexts/posts";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Post = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { posts, setPosts } = useContext(PostContext);
  const navigate = useNavigate();
  const handleAddPost = () => {
    const newPost = {
      id: posts.length + 1,
      title: title,
      description: description,
    };
    setPosts([...posts, newPost]);
    setTitle("");
    setDescription("");
    toast.success("Post added successfully");
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Post</h2>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-semibold mb-2"
          htmlFor="title"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Enter post title"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-semibold mb-2"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Enter post description"
        />
      </div>
      <button
        onClick={handleAddPost}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Add Post
      </button>
      <Toaster />
    </div>
  );
};

export default Post;
