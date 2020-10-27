import React from "react";
import "./Repository.css";

const Repository = (props) => {
  const {
    name,
    description,
    html_url,
    updated_at,
    language,
    watchers,
    forks,
    stargazers_count,
  } = props.repository;

  const navigateToRepository = () => {
    window.open(html_url, "_blank");
  };
  return (
    <div className="row repo-wraper" onClick={navigateToRepository}>
      <div className="col-md-9">
        <div className="basic info">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <br />
        <div className="more-info">
          <div>
            <span className="badge language-indicator"> </span>
            <span className="language">{language}</span>
            <span className="date">
              Updated:{" "}
              {`${new Date(updated_at).getMonth()}/${new Date(
                updated_at
              ).getDate()}/${new Date(updated_at).getFullYear()}`}
            </span>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="badge-info pull-right">
          <div className="row">
            <span className="badge badge-pill badge-primary">
              <i className="eye icon"></i>
              watchers
            </span>
            <span className="badge badge-pill badge-primary pull-right">
              {watchers}
            </span>
          </div>
          <div className="row">
            <span className="badge badge-pill badge-primary">
              <i className="star icon"></i>
              Stars
            </span>
            <span className="badge badge-pill badge-primary pull-right">
              {stargazers_count}
            </span>
          </div>
          <div className="row">
            <span className="badge badge-pill badge-primary">
              <i className="linkify icon"></i>
              Forks
            </span>
            <span className="badge badge-pill badge-primary pull-right">
              {forks}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repository;
