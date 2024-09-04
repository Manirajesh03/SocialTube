import React from "react";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex my-5 ml-5 w-full">
      <img
        src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
        alt="user-icon"
        className="h-8"
      />
      <div className="mx-3">
        <h1 className="font-bold">{name}</h1>
        <p className="w-[900px] xsm:max-md:w-full">{text}</p>
      </div>
    </div>
  );
};

export default Comment;
