import React, { useContext, useState } from "react";
import Comments from "../../components/comments/Comments";
import "./style.css";

export default function Posts({
  profileUrl,
  username,
  id,
  photoUrl,
  caption,
  comments,
}) {
  return (
    <div className="posts">
      <div className="posts-container">
        <div className="posts-header">
          <div className="posts-header-left">
            <img className="posts-header-pfp" src={profileUrl} />
            <p style={{ marginLeft: "8px", fontWeight: "500" }}>{username} </p>
          </div>
          <div className="posts-header-right">
            <button className="posts-delete-btn">Delete</button>
          </div>
        </div>
        <div className="posts-center">
          <img className="posts-center-img" src={photoUrl} />
        </div>
        <div className="posts-bottom">
          <p>
            <span style={{ fontWeight: "500" }}>{username}</span> {caption}
          </p>
        </div>
        {comments ? (
          comments.map((comments) => (
            <Comments
              username={comments.username}
              caption={comments.comments}
            />
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
