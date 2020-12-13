import React, { useState, useContext } from "react";
import "./NavigationBar.css";
import { Link, useHistory } from "react-router-dom";
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
    <div className="topnav" id="myTopnav">
      <header className="App-header">Shareful</header>
      <span className="profilebox">{displayUserIfAuthenticated()}</span>
      <div className="icon" href="" onClick={handleClick}>
        &#9776;
      </div>
      <ul className={click ? "main-menu active" : "main-menu"}>
        <Link to={RoutingPath.homeView} className="menu-link">
          Home
        </Link>
        <Link to={RoutingPath.createUser} className="menu-link">
          Create user
        </Link>
        <Link to={RoutingPath.aboutView} className="menu-link">
          about
        </Link>
      </ul>
    </div>
  );
};
export default NavigationBar;
