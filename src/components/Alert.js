import React from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    const up = word.toLowerCase();

    return up.charAt(0).toUpperCase() + up.slice(1);
  };
  return (
    //to handling NUll
    props.alertMsg && (
      <div
        className={`alert alert-${props.alertMsg.type} alert-dismissible fade show`}
        role="alert"
      >
        {capitalize(props.alertMsg.type)} :{" "}
        <strong> {props.alertMsg.msg}</strong>
      </div>
    )
  );
}
