import React from "react";

const Error = ({ error }) => {
  return (
    <div className="display-welcome ui segment">
      <h1>{error}</h1>
      <i className="frown outline huge icon"></i>
    </div>
  );
};

export default Error;
