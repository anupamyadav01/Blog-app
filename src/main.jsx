import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "../src/router";
import PostContextProvider from "./contexts/posts";
import AuthContextProvider from "./contexts/auth";

const Main = () => {
  return (
    <AuthContextProvider>
      <PostContextProvider>
        <Router />
      </PostContextProvider>
    </AuthContextProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
