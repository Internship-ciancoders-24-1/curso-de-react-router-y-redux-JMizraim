import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BaseApp from "../containers/App";
import LoginPage from "../containers/Login";
import RegisterPage from "../containers/Register";
import NotFound from "../containers/NotFound";
import Layout from "../components/Layout";
import Player from "../containers/Player";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={BaseApp} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/player/:id" component={Player} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
