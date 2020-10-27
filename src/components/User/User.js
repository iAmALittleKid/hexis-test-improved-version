import React from "react";
import UserCard from "../UserCard/UserCard";
import Repository from "../Repository/Repository";
import Organization from "../Organizations/Organization";
import Follower from "../Follower/Follower";
import "./User.css";

class User extends React.Component {
  state = { selectedInfo: "repos" };

  onInfoSelect = (selectedInfo) => {
    this.setState({ selectedInfo: selectedInfo });
  };

  displayDetail = () => {
    if (this.state.selectedInfo === "repos") {
      return (
        <div>
          <h3>Repositories</h3>
          <hr />
          <br />
          {this.returnListOfRepos()}
        </div>
      );
    } else if (this.state.selectedInfo === "orgs") {
      return (
        <div>
          <h3>Organizations</h3>
          <hr />
          <br />
          {this.returnListOfOrgs()}
        </div>
      );
    } else if (this.state.selectedInfo === "followers") {
      return (
        <div>
          <h3>Followers</h3>
          <hr />
          <br />
          {this.returnListOfFollowers(this.props.followers)}
        </div>
      );
    } else if (this.state.selectedInfo === "followings") {
      return (
        <div>
          <h3>Followings</h3>
          <hr />
          <br />
          {this.returnListOfFollowers(this.props.followings)}
        </div>
      );
    }

    return <div>No selection</div>;
  };

  returnListOfRepos = () => {
    const { repos } = this.props;

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

  returnListOfOrgs = () => {
    const { orgs } = this.props;

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

  returnListOfFollowers = (followers) => {
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

  render() {
    const { userInfo, orgs } = this.props;

    return (
      <div className="user-wrapper ui">
        <div className="user-card-wrapper row">
          <UserCard
            className="row"
            userInfo={userInfo}
            orgs={orgs.length}
            onInfoSelect={this.onInfoSelect}
          />
        </div>
        <div className="user-detected-detail row">{this.displayDetail()}</div>
      </div>
    );
  }
}

export default User;
