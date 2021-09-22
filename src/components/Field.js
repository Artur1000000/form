import React from "react";

export default function Field({ placeholder, value, handleProp }) {
  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          value={value}
          onChange={(e) => handleProp(e.target.value)}
          className="form-control"
          placeholder={placeholder}
          aria-describedby="basic-addon1"
        />
      </div>
    </>
  );
}
