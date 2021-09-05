import React from 'react';
import { AuthRoute } from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SplashContainer from './splash/splash_container';

const App = () => (
  <div>
    <header>
      <h1>scribble</h1>
      <SplashContainer />
    </header>
    <AuthRoute exact path='/login' component={LoginFormContainer} />
    <AuthRoute exact path='/signup' component={SignupFormContainer} />
  </div>
);

export default App;
