import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/user";
import { db } from "../../firebase";
import "./style.css";

export default function CommentInput({ comments, id }) {
  const [user, setUser] = useContext(UserContext).user;
  const [comment, setComment] = useState("");
  const [commentArr, setCommentArr] = useState(comments ? comments : []);

  const addComment = () => {
    if (comment != "") {
      commentArr.push({
        comment: comment,
        username: user.email.replace("@gmail.com", "").toLowerCase(),
      });

      db.collection("posts")
        .doc(id)
        .update({
          comments: commentArr,
        })
        .then(function () {
          setComment("");
          console.log("Comments updated");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div className="c-input">
      <div className="c-input-container">
        <textarea
          className="c-input-textarea"
          rows="1"
          placeholder="Enter comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button className="c-input-post-btn" onClick={addComment}>
          Post
        </button>
      </div>
    </div>
  );
}
