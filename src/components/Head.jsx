import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { isMenuOpen } from "../utils/actions";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  console.log("🚀 ~ Head ~ searchQuery:", searchQuery);

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(isMenuOpen());
  };

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const res = await data.json();
    console.log(res[1]);
    setSuggestions(res[1]);
    setShowSuggestions(true);
  };

  useEffect(() => {
    //API Call
    let timer;
    if (searchQuery) {
      timer = setTimeout(() => getSearchSuggestions(), 200);
    } else {
      setShowSuggestions(false);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

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
      <div className="col-span-10 px-10 xsm:max-md:hidden mt-1">
        <div className="flex">
          <input
            type="text"
            className="w-3/5 border border-gray-300 py-1 rounded-l-full px-4"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
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

        {suggestions.length > 0 && showSuggestions && (
          <div className="fixed bg-white w-[34.5%] shadow-lg rounded-lg p-4">
            <ul>
              {suggestions.map((item, key) => (
                <li className="py-1 flex items-center" key={key}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
                    alt="search-icon"
                    className="w-4 h-4 mx-2 mr-3"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
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
