import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import Posts from "../posts/Posts";
import "./style.css";

export default function Feed() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPost(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
    });
    console.log(post);
  }, []);

  return (
    <div className="feed">
      <div className="feed-container">
        {post.map(({ id, post }) => (
          <Posts
            key={id}
            id={id}
            profileUrl={post.profileUrl}
            username={post.username}
            photoUrl={post.photoUrl}
            caption={post.caption}
            comments={post.comments}
          />
        ))}
      </div>
    </div>
  );
}
