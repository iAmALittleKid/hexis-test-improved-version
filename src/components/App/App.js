import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Welcome from "../Welcome/Welcome";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import User from "../User/User";

import {
  getRepos,
  getUserData,
  getFollowers,
  getFollowings,
} from "../../api/GitHub/GitHub";

class App extends React.Component {
  state = {
    userInfo: null,
    orgs: [],
    repos: [],
    error: null,
    loading: false,
    followers: [],
    followings: [],
  };

  onSubmitUser = async (userName) => {
    this.resetState();
    try {
      this.setState({ loading: true });
      const userInfo = await getUserData(userName);
      const userRepos = await getRepos(userName);
      const followers = await getFollowers(userName);
      const followings = await getFollowings(userName);

      this.setState({
        userInfo: userInfo.user,
        orgs: userInfo.orgs,
        repos: userRepos,
        followers: followers,
        followings: followings,
        loading: false,
      });
    } catch (error) {
      if (userName === "") {
        this.resetState();
      } else {
        this.setState({ error: "User not found! ", loading: false });
      }
    }
  };

  displayBody = () => {
    if (this.state.error) {
      return <Error error={this.state.error} />;
    } else if (this.state.loading) {
      return <Loading />;
    } else if (this.state.userInfo) {
      return (
        <User
          userInfo={this.state.userInfo}
          orgs={this.state.orgs}
          repos={this.state.repos}
          followers={this.state.followers}
          followings={this.state.followings}
        />
      );
    } else if (!this.state.userInfo) {
      return <Welcome />;
    }
  };

  resetState = () => {
    this.setState({
      userInfo: null,
      orgs: [],
      repos: [],
      error: null,
      loading: false,
      followers: [],
      followings: [],
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSubmitUser} />
        {this.displayBody()}
      </div>
    );
  }
}

export default App;
