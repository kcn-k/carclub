import React from "react";
import Post from "../../containers/create-post/Post";
import "./style.css";

export default function Home() {
  return (
    <div className="home">
      <div>
        <Post />
      </div>
    </div>
  );
}
