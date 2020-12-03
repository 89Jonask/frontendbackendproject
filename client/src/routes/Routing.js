import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutView } from "../views/aboutview/AboutView.js";
import { HomeView } from "../views/homeview/HomeView.js";
import { ProfileView } from "../views/profileview/ProfileView.js";
import { SettingsView } from "../views/settingsview/SettingsView.js";
import { SigninView } from "../views/signinview/SigninView.js";
import { UserContext } from "../shared/global/provider/UserProvider.js";
import RoutingPath from "./RoutingPath";

export const Routing = (props) => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

  const blockRouteIfAuthenticated = (navigateToView) => {
    return authenticatedUser ? HomeView : SigninView;
  };
  const blockRouteIfNotAuthenticated = (navigateToView) => {
    return !authenticatedUser ? SigninView : navigateToView;
  };

  const checkIfUserIsAuthenticatedInBrowser = () => {
    setAuthenticatedUser(localStorage.getItem("username"));
  };

  useEffect(() => {
    checkIfUserIsAuthenticatedInBrowser();
  });

  return (
    <Router>
      {props.children}
      <Switch>
        <Route exact path={RoutingPath.aboutView} component={AboutView} />
        <Route exact path={RoutingPath.homeView} component={HomeView} />
        <Route
          exact
          path={RoutingPath.profileView}
          component={blockRouteIfNotAuthenticated(ProfileView)}
        />
        <Route
          exact
          path={RoutingPath.settingsView}
          component={blockRouteIfNotAuthenticated(SettingsView)}
        />
        <Route
          exact
          path={RoutingPath.signinView}
          component={blockRouteIfAuthenticated(SigninView)}
        />
        <Route component={HomeView} />
      </Switch>
    </Router>
  );
};
