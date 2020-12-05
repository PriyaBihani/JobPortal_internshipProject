import React from "react";
import { Switch, Route } from "react-router-dom";

import SignInAndUp from './components/SignInAndUp'
import Register from './components/Register'
import AdminDashboard from './components/AdminDashboard'
import Profile from "./components/Profile";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={SignInAndUp} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/admin' component={AdminDashboard} />
        <Route exact path='/profile' component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
