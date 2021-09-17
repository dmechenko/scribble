import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className='landing-main'>
      <div className='description'>
        <h1>Don't lose track of your ideas.</h1>
        <h5>Scribble can store your notes forever.</h5>
      </div>
      <button className='session-signin-btn-2'>
        <Link className='sign-in-text' to='/signup'>
          Sign Up
        </Link>
      </button>
      <div className='content'>
        <img src={computerIcon} />
        <div className='reasons'>
          <div className='reason-text'>
            <h3>REMEMBER EVERYTHING</h3>
            <p>
              Keep all your important thoughts in check. From your aspirations
              to your zoo trip plans.
            </p>
          </div>
          <div className='reason-text'>
            <h3>FIND YOUR NOTES QUICKLY</h3>
            <p>
              Organizing your notes are quick and easy. Store them by notebook,
              or by adding tags.
            </p>
          </div>
          <div className='reason-text'>
            <h3>ADD SOME FLAVOR</h3>
            <p>
              With our rich and flexible text editor, add a splash of color or
              store your memories in notes by adding images or embedding videos.
            </p>
          </div>
        </div>
      </div>
      <div className='landing-sections'>
        <div className='section'>
          <div className='block block-1'>
            <h2>GET INTO THE FLOW</h2> {/* block */}
            <ul>
              <li>
                <img className='green-check' src={greenCheck} />
                Hit your deadlines
              </li>
              <li>
                <img className='green-check' src={greenCheck} />
                Organize your life
              </li>
              <li>
                <img className='green-check' src={greenCheck} />
                Go paperless
              </li>
            </ul>
          </div>
        </div>
        <div className='section'>
          <div className='block block-2'>
            <h2>ANYWHERE, ANYTIME</h2> {/* block */}
            <p>Sign in on any browser</p>
          </div>
        </div>
        <div className='section'>
          <div className='block block-3'>
            <h2>THE BEST PART?</h2> {/* block */}
            <p>It's completely free!</p>
            {/* <p>Try out the demo user today!</p> */}
          </div>
        </div>
        {/* <div className='section'></div> */}
        <div className='section'>
          <div className='block block-4'>
            <p>READY TO DIVE IN?</p> {/* block */}
            <Link className='session-signin-btn' to='/signup'>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <div className='footer'>
        <div className='footer-row'>
          <h4>ABOUT ME</h4>
          <ul>
            <li>Hey, I'm Daniel Mechenko</li>
            <li>NYC Native</li>
            <li>Placeholder</li>
            <li>Placeholder</li>
          </ul>
        </div>
        <div className='footer-row'>
          <h4>CONTACT</h4>
          <ul>
            <li>
              <a href='https://github.com/dmechenko'>Github</a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/dmechenko/'>LinkedIn</a>
            </li>
            <li>
              <a href='#'>Personal Site</a>
            </li>
            <li>dmechenko@gmail.com</li>
          </ul>
        </div>
        <div className='footer-row'>
          <h4>TECHNOLOGIES</h4>
          <ul>
            <li>Ruby</li>
            <li>Rails</li>
            <li>PostgreSQL</li>
            <li>SQLite</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>React</li>
            <li>Redux</li>
          </ul>
        </div>
        <div className='footer-row'>
          <h4>OTHER PROJECTS</h4>
          <ul>
            <li>
              <a href='https://dmechenko.github.io/aA-SnowBrawl/'>SnowBrawl</a>
            </li>
            <li>Placeholder</li>
            <li>Placeholder</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Landing;
