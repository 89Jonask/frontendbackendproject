import React, { useState, useContext } from "react";
import "./NavigationBar.css";
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
    <div className="topnav" id="myTopnav">
      <header className="App-header">Shareful</header>
      <span className="profilebox">{displayUserIfAuthenticated()}</span>
      <div className="icon" href="" onClick={handleClick}>
        &#9776;
      </div>
      <ul className={click ? "main-menu active" : "main-menu"}>
        <a href={RoutingPath.homeView} className="menu-link">
          Home
        </a>
        <a href={RoutingPath.userView} className="menu-link">
          User
        </a>
        <div className="dropdown">
          <button className="dropbtn">
            Dropdown
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#">Link1 1</a>
            <a href="#">Linkd 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <a href={RoutingPath.aboutView} className="menu-link">
          about
        </a>
      </ul>
    </div>
  );
};
export default NavigationBar;
