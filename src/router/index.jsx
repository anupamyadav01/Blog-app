import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Post, Profile, Auth } from "../pages";
import Header from "../components/header/Header";

const index = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/post" element={<Post />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
