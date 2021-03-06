import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import Settings from "./containers/Settings";
import Error from "./containers/Error";
import NotFound from "./containers/NotFound";
import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Home} appProps={appProps} />
      <UnauthenticatedRoute
        path="/login"
        exact
        component={Login}
        appProps={appProps}
      />
      <UnauthenticatedRoute
        path="/signup"
        exact
        component={Signup}
        appProps={appProps}
      />
      <AuthenticatedRoute
        path="/notes/new"
        exact
        component={NewNote}
        appProps={appProps}
      />
      <AuthenticatedRoute
        path="/notes/:id"
        exact
        component={Notes}
        appProps={appProps}
      />
      <AuthenticatedRoute
        path="/settings"
        exact
        component={Settings}
        appProps={appProps}
      />
      <Route path="/error" exact component={Error} />
      <Route path="/error/notes/:id" exact component={Error} />
      <Route component={NotFound} />
    </Switch>
  );
}
