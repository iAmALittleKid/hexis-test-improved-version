import React, { useState } from "react";
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

export default function App() {
  const [orgs, setOrgs] = useState([]);
  const [repos, setRepos] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [followings, setFollowings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);

  const onSubmitUser = async (userName) => {
    resetState();
    try {
      setLoading(true);
      const userInfo = await getUserData(userName);
      const userRepos = await getRepos(userName);
      const followers = await getFollowers(userName);
      const followings = await getFollowings(userName);

      setOrgs(userInfo.orgs);
      setRepos(userRepos);
      setFollowers(followers);
      setFollowings(followings);
      setLoading(false);
      setUserInfo(userInfo.user);
    } catch (error) {
      if (userName === "") {
        resetState();
      } else {
        setError("User not found! ");
        setLoading(false);
      }
    }
  };

  const displayBody = () => {
    if (error) {
      return <Error error={error} />;
    } else if (loading) {
      return <Loading />;
    } else if (userInfo) {
      return (
        <User
          userInfo={userInfo}
          orgs={orgs}
          repos={repos}
          followers={followers}
          followings={followings}
        />
      );
    } else if (!userInfo) {
      return <Welcome />;
    }
  };

  const resetState = () => {
    setOrgs([]);
    setRepos([]);
    setFollowers([]);
    setFollowings([]);
    setLoading(false);
    setUserInfo(null);
    setError(null);
  };

  return (
    <div className="ui container">
      <SearchBar onSubmit={onSubmitUser} />
      {displayBody()}
    </div>
  );
}
