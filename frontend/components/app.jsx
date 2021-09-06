import React from 'react';
import { AuthRoute } from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import NavbarContainer from './navbar/navbar_container';
import NavbarEntryContainer from './navbar/navbar_entry_container';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <AuthRoute exact path='/' component={NavbarContainer} />
    <AuthRoute exact path='/login' component={LoginFormContainer} />
    <AuthRoute exact path='/signup' component={SignupFormContainer} />
    <Route exact path='/' component={NavbarEntryContainer} />
  </div>
);

export default App;
