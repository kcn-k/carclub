import React, { useContext, useState } from "react";
import CommentInput from "../../components/comment-input/CommentInput";
import Comments from "../../components/comments/Comments";
import { UserContext } from "../../contexts/user";
import { db, storage } from "../../firebase";
import "./style.css";

export default function Posts({
  profileUrl,
  username,
  id,
  photoUrl,
  caption,
  comments,
}) {
  const [user, setUser] = useContext(UserContext).user;

  const deletePost = () => {
    let imgRef = storage.refFromURL(photoUrl);

    imgRef
      .delete()
      .then(function () {
        console.log("Delete successfull");
      })
      .catch(function (error) {
        console.log(`Error: ${error}`);
      });

    db.collection("posts")
      .doc(id)
      .delete()
      .then(function () {
        console.log("Deleted post info");
      })
      .catch(function (error) {
        console.log(`Error: ${error}`);
      });
  };

  return (
    <div className="posts" style={{ margin: "10px 0px" }}>
      <div className="posts-container">
        <div className="posts-header">
          <div className="posts-header-left">
            <img className="posts-header-pfp" src={profileUrl} />
            <p style={{ marginLeft: "8px", fontWeight: "500" }}>{username} </p>
          </div>
          <div className="posts-header-right">
            <button className="posts-delete-btn" onClick={deletePost}>
              Delete
            </button>
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
        {console.log(comments)}
        {comments ? (
          comments.map((comments) => (
            <Comments username={comments.username} caption={comments.comment} />
          ))
        ) : (
          <></>
        )}
        {user ? <CommentInput comments={comments} id={id} /> : <></>}
      </div>
    </div>
  );
}
