import React from "react";

export default function Field({ placeholder, value, handleProp }) {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        value={value}
        onChange={(e) => handleProp(e.target.value, placeholder.en)}
        className="form-control"
        placeholder={placeholder.ru}
        aria-describedby="basic-addon1"
      />
    </div>
  );
}
