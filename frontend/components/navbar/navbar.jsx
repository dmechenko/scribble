import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavbarEntryContainer from './navbar_entry_container';

class Navbar extends React.Component {
  handleLogout() {
    this.props.logout();
  }

  handleScroll() {
    $('html,body').animate(
      {
        scrollTop: $('.landing-sections').offset().top,
      },
      'slow'
    );
  }

  render() {
    return (
      <header className='header'>
        <div className='main-nav'>
          <Link className='logo' to='/'>
            <img className='dolphin' src={dolphinLogo} alt='' />
            <p id='logo-text'>scribble</p>
          </Link>
          {/* <div className='nav-menu-border-box'> */}
          <ul className='nav-menu'>
            <li>
              <a onClick={this.handleScroll} href='#'>
                WHY SCRIBBLE
              </a>
            </li>
            <li>
              <a href='#'>FEATURES</a>
            </li>
            <li>
              <a href='#'>PLANS</a>
            </li>
          </ul>
          {/* </div> */}
          <ul className='nav-entry'>
            <NavbarEntryContainer />
          </ul>
        </div>
      </header>
    );
  }
}

export default Navbar;
