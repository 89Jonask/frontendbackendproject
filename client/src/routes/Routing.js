import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutView } from "../views/aboutview/AboutView.js";
import { HomeView } from "../views/homeview/HomeView.js";
import { InfoView } from "../views/infoview/InfoView.js";
import { ProfileView } from "../views/profileview/ProfileView.js";
import { ProductView } from "../views/productview/ProductView.js";
import { SettingsView } from "../views/settingsview/SettingsView.js";
import { SigninView } from "../views/signinview/SigninView.js";
import { SignupView } from "../views/signupview/SignupView.js";
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
        <Route exact path={RoutingPath.infoView} component={InfoView} />
        <Route exact path={RoutingPath.productView} component={ProductView} />
        <Route exact path={RoutingPath.profileView} component={ProfileView} />
        <Route exact path={RoutingPath.settingsView} component={SettingsView} />
        <Route exact path={RoutingPath.signinView} component={SigninView} />
        <Route exact path={RoutingPath.signupView} component={SignupView} />
        <Route component={HomeView} />
      </Switch>
    </Router>
  );
};
