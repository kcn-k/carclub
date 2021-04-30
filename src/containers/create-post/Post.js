import React from "react";
import SignInBtn from "../../components/sign-in-btn/SignInBtn";
import "./style.css";

export default function Post() {
  return (
    <div className="post">
      <div className="post-container">
        <div>
          <SignInBtn />
        </div>
        <div>
          <p className="post-p-c"> to Post and Comment</p>
        </div>
      </div>
    </div>
  );
}
