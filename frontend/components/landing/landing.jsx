import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className='landing-main'>
      <div className='description'>
        <h1>Don't lose track of your ideas.</h1>
        <h5>Scribble can store your notes forever.</h5>
      </div>
      <button className='session-signin-btn'>
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
            <p>It's comletely free!</p>
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
