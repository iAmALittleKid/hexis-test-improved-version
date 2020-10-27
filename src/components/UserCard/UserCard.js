import React from "react";
import "./UserCard.css";

export default function UserCard(props) {
  const displayCard = () => {
    if (props.userInfo) {
      const {
        avatar_url,
        name,
        login,
        bio,
        public_repos,
        followers,
        following,
      } = props.userInfo;

      const { onInfoSelect } = props;

      return (
        <div>
          <div className="row user-card">
            <div className="col-s-3 col-md-3 col-lg-3 profile-pic-container">
              <img
                className="profile-pic rounded"
                src={avatar_url}
                alt="profile"
              />
            </div>
            <div className="col-s-9 col-md-9 col-lg-9 row info-summary-container">
              <div className="info-summary">
                <div className="row name">
                  <h2>{name}</h2>
                  <span>@{login}</span>
                </div>
                <div className="row bio-info">
                  <p>{bio}</p>
                </div>
                <div className="row bottom-link">
                  <span
                    className="col-sm-3 col-md-3 col-lg-3"
                    onClick={() => onInfoSelect("repos")}
                  >
                    Repository
                    <span className="badge badge-orange">{public_repos}</span>
                  </span>
                  <span
                    className="col-sm-3 col-md-3 col-lg-3"
                    onClick={() => onInfoSelect("orgs")}
                  >
                    Organization
                    <span className="badge badge-orange">{props.orgs}</span>
                  </span>
                  <span
                    className="col-sm-3 col-md-3 col-lg-3"
                    onClick={() => onInfoSelect("followers")}
                  >
                    Followers
                    <span className="badge badge-orange">{followers}</span>
                  </span>
                  <span
                    className="col-sm-3 col-md-3 col-lg-3"
                    onClick={() => onInfoSelect("followings")}
                  >
                    Followings
                    <span className="badge badge-orange">{following}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return <div>Could not load the user info</div>;
  };

  return displayCard();
}
