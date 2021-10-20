import React from 'react';
import { Link } from 'react-router-dom';

class NavbarEntry extends React.Component {
  render() {
    return (
      <nav className='entry-nav'>
        <Link to='/login'>Log In</Link>
      </nav>
    );
  }
}

export default NavbarEntry;
