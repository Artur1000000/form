import React from "react";

export default function SelectField({ items, selected, placeholder }) {
  return (
    <div className="dropdown">
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={(e) => selected(e.target.value, placeholder.en)}
      >
        <option defaultValue>{placeholder.ru}</option>
        {items.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
