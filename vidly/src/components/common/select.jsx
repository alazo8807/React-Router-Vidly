import React, { Component } from "react";

const Select = ({ source, name, value, label, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="genre">{label}</label>
      <select
        id={name}
        onChange={onChange}
        name={name}
        value={value}
        className="form-control"
      >
        {source.map(i => (
          <option key={i.name || i.key} value={i._id}>
            {i.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
