import React from "react";
import "./App.css";
import Navbar from "./containers/navbar/Navbar";
import { UserContextProvider } from "./contexts/user";
import Home from "./pages/home/Home";

function App() {
  return (
    <UserContextProvider>
      <div className="app">
        <div className="app-container">
          <Navbar />
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;
