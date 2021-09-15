import React from 'react';
import { Link } from 'react-router-dom';

class NavbarEntry extends React.Component {
  render() {
    // const entryLinks = () => (
    //   <nav className='entry-nav'>
    //     <Link to='/login'>Log In</Link>
    //   </nav>
    // );
    // const exitLinks = () => (
    //   <nav className='entry-nav'>
    //     <h3>Welcome {this.props.currentUser.email}</h3>
    //     <button onClick={this.props.logout}>Logout</button>
    //   </nav>
    // );
    // return this.props.currentUser ? exitLinks() : entryLinks();
    return (
      <nav className='entry-nav'>
        <Link to='/login'>Log In</Link>
      </nav>
    );
  }
}

export default NavbarEntry;
