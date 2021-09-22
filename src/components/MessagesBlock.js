import React from "react";

export default function MessagesBlock(props) {
  return (
    <>
      <div className="success">{props.success}</div>
      <div className="error">{props.error}</div>
    </>
  );
}