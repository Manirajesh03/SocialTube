import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { Outlet, useSearchParams } from "react-router-dom"; // Import Outlet
import { useDispatch, useSelector } from "react-redux";
import { closeMenu, openMenu } from "../utils/actions";

const Body = () => {
  const [params] = useSearchParams();
  const bodyParams = params.get("v");
  const dispatch = useDispatch();

  useEffect(() => {
    if (bodyParams) {
      dispatch(closeMenu());
    } else {
      dispatch(openMenu());
    }
  }, [bodyParams]);

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
