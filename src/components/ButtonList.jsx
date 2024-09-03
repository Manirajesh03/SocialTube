import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const data = [
    "Movies",
    "News",
    "Sports",
    "Racing",
    "Shorts",
    "Videos",
    "Cricket",
    "Telugu Cinema",
    "Podcasts",
    "Live",
    "Tamil Cinema",
    "T-Series",
    "Drama",
  ];
  return (
    <div className="my-5 mx-2 flex">
      {data.map((item, id) => (
        <Button name={item} key={id} />
      ))}
    </div>
  );
};

export default ButtonList;
