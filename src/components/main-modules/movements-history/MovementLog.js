import React from "react";

const MovementLog = (props) => {
  return (
    <div className="container">
      <span>{props.date}</span>
      <div className="container">
        <p>{props.type}</p>
        <p>{props.beneficiary}</p>
        <p>${props.amount}</p>
      </div>
    </div>
  );
};

export default MovementLog;
