import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  handleLogout() {
    this.props.logout();
  }

  render() {
    debugger;
    return (
      <div>
        {this.props.currentUser ? (
          <>
            <h3>Welcome {this.props.currentUser.email}</h3>
            <button onClick={this.props.logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to={'/login'}>Log In</Link>
            <br />
            <Link to={'/signup'}>Sign Up</Link>
          </>
        )}
      </div>
    );
  }
}

export default Splash;
