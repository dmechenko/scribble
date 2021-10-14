import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import NavbarContainer from './navbar/navbar_container';
import NavbarEntryContainer from './navbar/navbar_entry_container';
import { Route } from 'react-router-dom';
import Sidenav from './navbar/sidenav_container';
import Main from './main/main';
import Landing from './landing/landing';

const App = () => (
  <div>
    <AuthRoute exact path='/' component={NavbarContainer} />
    <AuthRoute exact path='/' component={Landing} />
    <AuthRoute exact path='/login' component={LoginFormContainer} />
    <AuthRoute exact path='/signup' component={SignupFormContainer} />
    <ProtectedRoute path='/notes' component={Main} />
    <ProtectedRoute path='/notebooks' component={Main} />
    <ProtectedRoute path='/tags' component={Main} />
  </div>
);

export default App;
