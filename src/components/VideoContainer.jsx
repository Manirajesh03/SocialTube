import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "./../utils/constants";
import VideoCard from "./VideoCard";

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
        <VideoCard info={video} key={id} />
      ))}
    </div>
  );
};

export default VideoContainer;
