import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import "./App.css";

const { Header, Content, Footer } = Layout;

function App() {
  const menuItems = [
    { key: "1", label: <Link to="/">Home</Link> },
    { key: "2", label: <Link to="/profile">Profile</Link> },
  ];

  return (
    <div style={{ padding: "0" }}>
      <div className="site-layout-content ">
        <div></div>
        
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
