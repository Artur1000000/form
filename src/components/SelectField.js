import React from "react";

export default function SelectField({ items, selected }) {
  return (
    <div className="dropdown">
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={(e) => selected(e.target.value)}
      >
        <option defaultValue>Страна</option>
        {items.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}