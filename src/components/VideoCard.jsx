import React from "react";
import { numToRoman } from "../utils/helper_fn";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const viewCount = statistics?.viewCount;
  return (
    <div className="w-full mx-2 my-5 rounded-xl xsm:max-md:w-full">
      <img
        src={thumbnails.medium.url}
        alt="thumbnail"
        className="rounded-xl w-full"
      />
      <p className="font-bold text-ellipsis">{title}</p>
      <p className="font-semibold">{channelTitle}</p>
      <div className="flex justify-between">
        // eslint-disable-next-line
        <span>{viewCount ? numToRoman(viewCount) + " " + "views" : ""}</span>
        <span>{publishedAt}</span>
      </div>
    </div>
  );
};

export default VideoCard;
