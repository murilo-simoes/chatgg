import React from "react";
import ReactLoading from "react-loading";

const Loading = ({ type, color }) => {
  return (
    <div className="loading">
      <ReactLoading
        className="center"
        type={type}
        color={color}
        height={64}
        width={64}
      />
    </div>
  );
};

export default Loading;
