import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "./../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const res = await data.json();
    setVideos(res.items);
  };
  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div className="flex flex-wrap">
      {videos.map((video, id) => (
        <Link to={"/watch?v=" + video.id} className="xsm:max-md:min-w-full">
          <VideoCard info={video} key={id} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
