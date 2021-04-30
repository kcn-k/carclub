import React, { useState, useContext } from "react";
import SignInBtn from "../../components/sign-in-btn/SignInBtn";
import "./style.css";
import Logo from "../../components/media/carclubLogo.png";
import { UserContext } from "../../contexts/user";

export default function Navbar() {
  const [user, setUser] = useContext(UserContext).user;

  return (
    <div className="navbar">
      <div className="navbar-container"></div>
      <div className="navbar-logo-container">
        <img src={Logo} className="navbar-logo" />
      </div>
      <div className="navbar-sign-in-btn">
        {user ? (
          <>
            <img className="navbar-user-pfp" src={user.photoURL} />
          </>
        ) : (
          <>
            <SignInBtn />
          </>
        )}
      </div>
    </div>
  );
}
