import React from "react";

const VideoCard = ({ info }) => {
  console.log("🚀 ~ VideoCard ~ info:", info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const { viewCount } = statistics;
  return (
    <div className="w-80 mx-2 my-5 shadow-md rounded-xl">
      <img src={thumbnails.medium.url} alt="thumbnail" className="rounded-xl" />
      <p className="font-bold text-ellipsis">{title}</p>
      <p className="font-semibold">{channelTitle}</p>
      <div className="flex justify-between">
        <span>{viewCount} Views</span>
        <span>{publishedAt}</span>
      </div>
    </div>
  );
};

export default VideoCard;
