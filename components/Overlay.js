import React from "react";

const Overlay = ({ onClick, children }) => {
  return <div onClick={onClick} className="overlay">{children}</div>;
};

export default Overlay;
