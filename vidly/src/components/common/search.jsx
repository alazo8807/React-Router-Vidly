import React, { Component } from "react";

const Search = ({ onChange, value }) => {
  return (
    <div className="form-group">
      <input
        name="search"
        type="text"
        placeholder="Search"
        onChange={onChange}
        className="form-control"
        value={value}
      />
    </div>
  );
};

export default Search;
