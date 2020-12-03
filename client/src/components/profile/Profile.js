import React, { useState, useContext } from "react";
import { UserContext } from "../../shared/global/provider/UserProvider";
import { useHistory } from "react-router-dom";
import "./Profile.css";
import RoutingPath from "../../routes/RoutingPath";

export const Profile = () => {
  const history = useHistory();
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const logout = () => {
    localStorage.removeItem("username");
    setAuthenticatedUser(false);
    history.push(RoutingPath.homeView);
  };

  return (
    <div className="profileWrapper" onClick={handleClick}>
      <img
        className="profileImg"
        src={"https://www.thispersondoesnotexist.com/image"}
        alt=""
      />
      <span className="displayedUsername">{authenticatedUser}</span>
      <div className="profileDropdown">
        <a href={RoutingPath.settingsView} className="menu-link">
          Settings
        </a>
        <a href={RoutingPath.profileView} className="menu-link">
          Profile
        </a>
        <hr />
        <a onClick={() => logout()}>Logout</a>
      </div>
    </div>
  );
};
