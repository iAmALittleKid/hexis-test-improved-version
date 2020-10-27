import React from "react";
import "./Follower.css";

const Follower = (props) => {
  const { avatar_url, login } = props.follower;
  return (
    <div className="chip">
      <img src={avatar_url} alt="Person" width="96" height="96" />
      {login}
    </div>
  );
};

export default Follower;
