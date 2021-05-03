import React, { useContext } from "react";
import { UserContext } from "../../contexts/user";
import { signInWithGoogle } from "../../services/auth";
import "./style.css";

export default function SignInBtn() {
  const [user, setUser] = useContext(UserContext).user;

  const signInBtnClick = async () => {
    let userSignIn = await signInWithGoogle();
    if (userSignIn) setUser(userSignIn);
  };

  return (
    <div className="sign-in-btn" onClick={signInBtnClick}>
      <div className="sign-in-btn-container">
        <p>Sign in with Google</p>
      </div>
    </div>
  );
}
