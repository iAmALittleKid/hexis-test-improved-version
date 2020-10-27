import React, { useState } from "react";
import UserCard from "../UserCard/UserCard";
import Repository from "../Repository/Repository";
import Organization from "../Organizations/Organization";
import Follower from "../Follower/Follower";
import "./User.css";

export default function User(props) {
  const [selectedInfo, setSelectedInfo] = useState("repos")

  const onInfoSelect = (selectedInfo) => {
    setSelectedInfo(selectedInfo)
  };

  const displayDetail = () => {
    if (selectedInfo === "repos") {
      return (
        <div>
          <h3>Repositories</h3>
          <hr />
          <br />
          {returnListOfRepos()}
        </div>
      );
    } else if (selectedInfo === "orgs") {
      return (
        <div>
          <h3>Organizations</h3>
          <hr />
          <br />
          {returnListOfOrgs()}
        </div>
      );
    } else if (selectedInfo === "followers") {
      return (
        <div>
          <h3>Followers</h3>
          <hr />
          <br />
          {returnListOfFollowers(props.followers)}
        </div>
      );
    } else if (selectedInfo === "followings") {
      return (
        <div>
          <h3>Followings</h3>
          <hr />
          <br />
          {returnListOfFollowers(props.followings)}
        </div>
      );
    }

    return <div>No selection</div>;
  };

  const returnListOfRepos = () => {
    const { repos } = props;

    if (repos) {
      return repos.map((repository) => (
        <div className="row" key={repository.id}>
          <Repository repository={repository} />
        </div>
      ));
    } else {
      return <h2 className="row">No Repository to show</h2>;
    }
  };

  const returnListOfOrgs = () => {
    const { orgs } = props;

    if (orgs.length > 0) {
      return orgs.map((org) => (
        <div className="row org-item" key={org.id}>
          <Organization org={org} />
        </div>
      ));
    } else {
      return <h3 className="row">No Organizations to show</h3>;
    }
  };

  const returnListOfFollowers = (followers) => {
    if (followers.length > 0) {
      return followers.map((follower) => (
        <div
          className="col-sm-6 col-md-3 col-lg-3 follow-wrapper"
          key={follower.id}
        >
          <Follower follower={follower} />
        </div>
      ));
    } else {
      return <h3 className="row">No Followers to show</h3>;
    }
  };


    const { userInfo, orgs } = props;

    return (
      <div className="user-wrapper ui">
        <div className="user-card-wrapper row">
          <UserCard
            className="row"
            userInfo={userInfo}
            orgs={orgs.length}
            onInfoSelect={onInfoSelect}
          />
        </div>
        <div className="user-detected-detail row">{displayDetail()}</div>
      </div>
    );
  
}