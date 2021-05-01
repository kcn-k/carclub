import React from "react";
import "./style.css";

export default function Comments({ username, caption }) {
  return (
    <div className="comments">
      <div className="comments-container">
        <p>
          <span style={{ fontWeight: "500" }}>{username}</span> {caption}
        </p>
      </div>
    </div>
  );
}
