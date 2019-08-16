import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './User/Home';
import Register from './User/Register';
import Login from './User/Login';
import Profile from './User/Profile';
import UpdateProfile from './User/UpdateProfile';
import ForgotPassword from './User/ForgotPassword';
import ResetPassword from './User/ResetPassword';
import UpdatePassword from './User/UpdatePassword';
import NavTab from './Skyre/Navtab.js';
import Login2 from './Login.js';

const Routes = () => (
  <div>
    <Router>
        <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" render={(props) => <NavTab/>}/>
        <Route exact path="/login2" render={(props) => <Login2 />}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/reset/:token" component={ResetPassword} />
        <Route exact path="/forgotPassword" component={ForgotPassword} />
        <Route exact path="/userProfile/:username" component={Profile} />
        <Route exact path="/updateUser/:username" component={UpdateProfile} />
        <Route
            exact
            path="/updatePassword/:username"
            component={UpdatePassword}
        />
        </Switch>
    </Router>
  </div>
);

export default Routes;
