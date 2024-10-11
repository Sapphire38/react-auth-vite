import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import "./App.css";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

function App() {
  const items = [
    {
      key: "sub1",
      label: "Navigation One",
      icon: <MailOutlined />,
      children: [
        {
          key: "g1",
          label: "Item 1",
          type: "group",
          children: [
            {
              key: "1",
              label: "Option 1",
            },
            {
              key: "2",
              label: "Option 2",
            },
          ],
        },
        {
          key: "g2",
          label: "Item 2",
          type: "group",
          children: [
            {
              key: "3",
              label: "Option 3",
            },
            {
              key: "4",
              label: "Option 4",
            },
          ],
        },
      ],
    },
  ];

  const onClick = (e) => {
    console.log("click ", e);
  };

  return (
    <div style={{ padding: "0" }}>
      <div className="flex w-screen h-screen overflow-hidden bg-neutral-900">
        <div className="flex w-ful lg:w-1/5 h-screen ">
          <Menu
            onClick={onClick}
            style={{
              width: "100%",
              height: "100%",
            }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={items}
          />
        </div>
        <div className="flex w-4/5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
