import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom"; // Import Outlet

const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <Sidebar />
      <div className="main-content">
        <Outlet /> {/* This will render nested routes */}
      </div>
    </div>
  );
};

export default Body;
