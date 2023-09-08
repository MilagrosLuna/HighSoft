import React from "react";

const MovementLog = (props) => {
  return (
        <tr>
          <td>{props.date}</td>
          <td>{props.type}</td>
          <td>{props.beneficiary}</td>
          <td>${props.amount}</td>
        </tr>
    )
};

export default MovementLog;

// <p>{props.type}</p>
// <p>{props.beneficiary}</p>
// <p>${props.amount}</p>
