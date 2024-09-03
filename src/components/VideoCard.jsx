import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const { viewCount } = statistics;
  return (
    <div className="w-[340px] mx-2 my-5 shadow-sm rounded-xl xsm:max-md:w-full">
      <img
        src={thumbnails.medium.url}
        alt="thumbnail"
        className="rounded-xl w-full"
      />
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
