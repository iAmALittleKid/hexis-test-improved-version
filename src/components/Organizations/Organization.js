import React from "react";

const Organization = (props) => {
  const { avatar_url, description } = props.org;

  return (
    <div className="org-wrapper">
      <img src={avatar_url} className="col-lg-1 col-md-1" alt="organization" />
      <p className="col-md-11 col-lg-11">{description}</p>
    </div>
  );
};

export default Organization;
