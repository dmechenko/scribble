import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavbarEntryContainer from './navbar_entry_container';
import dolphin from '../../../app/assets/images/dolphin_logo.png';

class Navbar extends React.Component {
  handleLogout() {
    this.props.logout();
  }

  render() {
    return (
      <header className='header'>
        <div className='main-nav'>
          <Link className='logo' to='/'>
            <img className='dolphin' src={dolphin} alt='' />
            <p id='logo-text'>scribble</p>
          </Link>
          <ul className='nav-menu'>
            <li>
              <a href='#'>WHY SCRIBBLE</a>
            </li>
            <li>
              <a href='#'>FEATURES</a>
            </li>
            <li>
              <a href='#'>PLANS</a>
            </li>
            {/* <li>
              <NavbarEntryContainer />
            </li> */}
          </ul>
          <ul className='nav-entry'>
            <NavbarEntryContainer />
          </ul>
        </div>
      </header>
    );
  }
}

export default Navbar;
