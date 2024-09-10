import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "./../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const searchVideos = useSelector((state) => state.searchVideos);

  const getVideos = async () => {
    if (searchVideos.length === 0) {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const res = await data.json();
      setVideos(res.items);
    } else {
      setVideos(searchVideos);
    }
  };
  useEffect(() => {
    getVideos();
  }, [searchVideos]);

  return (
    <div className="flex flex-wrap">
      {videos.map((video, id) => (
        <Link
          to={`/watch?v=${
            searchVideos.length === 0 ? video.id : video?.id?.videoId
          }`}
          key={id}
          className="xsm:max-md:min-w-full w-[33.33%] pr-5 pb-5"
        >
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
