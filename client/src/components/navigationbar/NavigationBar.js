import React, { useState, useContext } from "react";
import "./NavigationBar.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../shared/global/provider/UserProvider";
import { Profile } from "../profile/Profile";
import RoutingPath from "../../routes/RoutingPath";

export const NavigationBar = () => {
  const history = useHistory();
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const displayUserIfAuthenticated = () => {
    return authenticatedUser ? (
      <div className="profile">
        {" "}
        <Profile />{" "}
      </div>
    ) : (
      <span
        onClick={() => history.push(RoutingPath.signinView)}
        className="signin"
      >
        Lowwg in
      </span>
    );
  };

  return (
    <div className="navigationBar">
      <div className="menuWrapper">
        <img
          className="profileImg"
          src={"https://www.thispersondoesnotexist.com/image"}
          alt=""
        />
        <span className="displayedUsername">Menu</span>
        <div className="menuDropdown">
          <Link to={RoutingPath.homeView} className="menu-link">
            Home
          </Link>
          <Link to={RoutingPath.homeView} className="menu-link">
            Home
          </Link>

          <Link to={RoutingPath.homeView} className="menu-link">
            Home
          </Link>

          <Link to={RoutingPath.homeView} className="menu-link">
            signin
          </Link>
        </div>
      </div>
      <header className="App-header">Shareful</header>
      {displayUserIfAuthenticated()}
    </div>
  );
};
export default NavigationBar;
