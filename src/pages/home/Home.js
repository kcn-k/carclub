import React from "react";
import Post from "../../containers/create-post/Post";
import Feed from "../../containers/feed/Feed";
import "./style.css";

export default function Home() {
  return (
    <div className="home">
      <div>
        <Post />
        <Feed />
      </div>
    </div>
  );
}
