import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  createPost,
  getImages,
  getPosts,
  getPostsController,
} from "./api/requests";

function App() {
  useEffect(() => {
    getPosts();
    getPostsController.abort();
    createPost({ body: "asd", title: "Post title" });
    // getImages();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
