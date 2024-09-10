import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isMenuOpen, searchData, searchVideos } from "../utils/actions";
import { YOUTUBE_SEARCH_API, YOUTUBE_VIDEO_SEARCH } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const cacheSearchedData = useSelector((store) => store.initialSearchData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMenuHandler = () => {
    dispatch(isMenuOpen());
  };

  const getSearchSuggestions = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const res = await data.json();
      setSuggestions(res[1]);
      dispatch(searchData({ [searchQuery]: res[1] }));
      setShowSuggestions(true);
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
    }
  };

  const getSearchVideos = async (searchReq) => {
    setShowSuggestions(false);
    try {
      const data = await fetch(YOUTUBE_VIDEO_SEARCH + searchReq || searchQuery);
      const res = await data.json();
      dispatch(searchVideos(res.items));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // API Call
    let timer;
    if (searchQuery) {
      if (cacheSearchedData[searchQuery]) {
        setSuggestions(cacheSearchedData[searchQuery]);
        setShowSuggestions(true);
      } else {
        timer = setTimeout(() => getSearchSuggestions(), 200);
      }
    } else {
      setShowSuggestions(false);
    }
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return (
    <div className="grid grid-flow-col items-center px-4 py-2 shadow-md xsm:max-md:justify-between xsm:max-md:px-0">
      <div className="flex items-center col-span-1 mx-2 mr-20 xsm:max-md:justify-between xsm:max-md:mr-0">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256"
          alt="menu"
          className="h-7 cursor-pointer xsm:max-md:hidden"
          onClick={toggleMenuHandler}
        />
        <img
          src={require("../assets/logo.png")}
          alt="youtube-logo"
          className="h-12 mx-5 xsm:max-md:max-w-none xsm:max-md:m-0"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="col-span-10 px-10 mt-1 xsm:max-md:px-0 xsm:max-md:mr-4">
        <div className="flex">
          <input
            type="text"
            className="w-3/5 border border-gray-300 py-1 rounded-l-full px-4"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            // onBlur={() => setShowSuggestions(false)}
          />
          <button
            type="submit"
            className="border border-gray-300 py-2 px-6 rounded-r-full bg-gray-100"
            onClick={() => getSearchVideos(searchQuery)}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
              alt="search-icon"
              className="w-5"
            />
          </button>
        </div>

        {suggestions.length > 0 && showSuggestions && (
          <div className="absolute bg-white w-[34.5%] shadow-lg rounded-lg p-4 xsm:max-md:w-1/2">
            <ul>
              {suggestions.map((item, key) => (
                <button
                  type="=button"
                  key={key}
                  className="w-full"
                  onClick={() => getSearchVideos(item)}
                >
                  <li className="py-1 flex items-center cursor-pointer">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
                      alt="search-icon"
                      className="w-4 h-4 mx-2 mr-3"
                    />
                    {item}
                  </li>
                </button>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
          alt="user-icon"
          className="h-8 xsm:max-md:hidden"
        />
      </div>
    </div>
  );
};

export default Head;
