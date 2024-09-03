import React from "react";
import { useDispatch } from "react-redux";
import { isMenuOpen } from "../utils/actions";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(isMenuOpen());
  };
  return (
    <div className="grid grid-flow-col px-4 py-2 shadow-md xsm:max-md:justify-between">
      <div className="flex items-center col-span-1 mx-2 mr-20 xsm:max-md:justify-between">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256"
          alt="menu"
          className="h-7 cursor-pointer"
          onClick={toggleMenuHandler}
        />
        <img
          // src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/YouTube_2024.svg/250px-YouTube_2024.svg.png"
          src={require("../assets/logo.png")}
          alt="youtube-logo"
          className="h-12 mx-5"
        />
      </div>
      <div className="col-span-10 px-10 flex xsm:max-md:hidden">
        <input
          type="text"
          className="w-3/5 border border-gray-300 py-1 rounded-l-full px-4"
          placeholder="Search"
        />
        <button className="border border-gray-300 py-2 px-6 rounded-r-full bg-gray-100">
          <img
            // src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png"
            src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
            alt="search-icon"
            className="w-5"
          />
        </button>
      </div>
      <div className="col-span-1">
        <img
          src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
          alt="user-icon"
          className="h-8"
        />
      </div>
    </div>
  );
};

export default Head;
