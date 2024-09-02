import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <span className="p-2 m-1 bg-gray-100 rounded-lg font-semibold">
        {name}
      </span>
    </div>
  );
};

export default Button;
