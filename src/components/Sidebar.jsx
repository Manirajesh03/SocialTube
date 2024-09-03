import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.isMenuOpen);
  return (
    <>
      {isMenuOpen && (
        <div className="p-5 shadow-sm col-span-3 w-[200px]">
          <h1 className="font-bold">Subscriptions</h1>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
          </ul>
          <h1 className="font-bold pt-5">Watch Later</h1>
          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
          </ul>
          <h1 className="font-bold pt-5">Watch Later</h1>
          <ul>
            <li>Home</li>
            <li>Shorts</li>
            <li>Videos</li>
            <li>Live</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Sidebar;
