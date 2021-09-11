import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className='landing-main'>
      <div className='description'>
        <h1>Don't lose track of your ideas.</h1>
        <h5>Scribble can store your notes forever.</h5>
      </div>
      <Link className='session-signin-btn' to='/signup'>
        Sign Up
      </Link>
      <div className='content'>
        <img src={dolphinLogo} />
        <div className='reasons'>
          <div className='reason-text'>
            <h3>Placeholder</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              consequatur asperiores! Modi saepe, tempora nulla, harum rerum
              corrupti nam veritatis.
            </p>
          </div>
          <div className='reason-text'>
            <h3>Placeholder</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              consequatur asperiores! Modi saepe, tempora nulla, harum rerum
              corrupti nam veritatis.
            </p>
          </div>
          <div className='reason-text'>
            <h3>Placeholder</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              consequatur asperiores! Modi saepe, tempora nulla, harum rerum
              corrupti nam veritatis.
            </p>
          </div>
        </div>
      </div>
      <div className='landing-sections'>
        <div className='section'>
          <div className='block'>
            <h2>Get into the flow.</h2> {/* block */}
          </div>
          <ul>
            <li>Hit your deadlines</li>
            <li>Organize your life</li>
            <li>Go paperless</li>
          </ul>
        </div>
        <div className='section'>
          <div className='block'>
            <h2>Anywhere, anytime.</h2> {/* block */}
          </div>
          <p>Sign in on any browser</p>
        </div>
        <div className='section'>
          <div className='block'>
            <h2>The best part?</h2> {/* block */}
          </div>
        </div>
        <div className='section'>
          <p>
            It's comletely<span>FREE!</span>
          </p>
          <p>Try out the demo user today!</p>
        </div>
        <div className='section'>
          <div className='block'>
            <p>Ready to dive in?</p> {/* block */}
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