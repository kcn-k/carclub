import React, { useState, useContext } from "react";
import SignInBtn from "../../components/sign-in-btn/SignInBtn";
import "./style.css";
import Logo from "../../components/media/carclubLogo.png";
import { UserContext } from "../../contexts/user";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "../../pages/home/Home";
import ContactUs from "../../pages/contact-us/ContactUs";

export default function Navbar() {
  const [user, setUser] = useContext(UserContext).user;

  return (
    <div className="container">
      <Router>
        <div className="navbar-container">
          <div className="navbar-logo-container">
            <img src={Logo} className="navbar-logo" />
          </div>
          <div>
            <ul className="nav-links">
              <li
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  marginTop: "4px",
                  listStyleType: "none",
                }}
              >
                <Link to="/home">Home</Link>
              </li>
              <li
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  marginTop: "4px",
                  listStyleType: "none",
                }}
              >
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
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
        </div>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/contact-us" component={ContactUs} />
        </Switch>
      </Router>
    </div>
  );
}
