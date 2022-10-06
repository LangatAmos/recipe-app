import React from "react";
import "./App.css";

function Search({handleSearch, handleSubmit}) {
  return (
    <form onSubmit={handleSubmit} className="Search">
      <div className="form-row">
        <div className="col-7">
          <input
          onChange={(e) => {handleSearch(e.target.value)}}
            type="text"
            className="form-control"
            placeholder="Search recipes"
          />
        </div>
      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-4">
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;
