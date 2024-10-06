import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import "./App.css";

function App() {
  const menuItems = [
    { key: "1", label: <Link to="/">Home</Link> },
    { key: "2", label: <Link to="/profile">Profile</Link> },
  ];

  return (
    <div style={{ padding: "0" }}>
      <div className=" ">
        <div className="flex flex-col gap-2">
          
          <Link to="/">Hola</Link>
          <Link to="/profile">Profile</Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
