import React, { useState } from "react";

export default function SearchBar(props) {
  const [userName, setUserName] = useState("");

  const onInputChange = (event) => {
    setUserName(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(userName);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field ui grid">
          <div className="ui row">
            <label className="two wide column">
              <i className="huge github alternate icon"></i>
            </label>
            <div className="twelve wide column">
              <div className="ui icon huge input">
                <input
                  type="text"
                  placeholder="Search for a Github user or Organization"
                  value={userName}
                  onChange={onInputChange}
                />
                <i className="circular search link icon"></i>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
