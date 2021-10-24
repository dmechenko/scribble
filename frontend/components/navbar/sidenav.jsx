import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faBook,
  faSignOutAlt,
  faPlusSquare,
  faTags,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaAngellist } from 'react-icons/fa';
import { BsPersonCircle } from 'react-icons/bs';

class Sidenav extends React.Component {
  constructor(props) {
    super(props);
  }

  handleCreate() {
    let note = {
      title: 'Untitled',
      body: '',
      notebook_id: this.props.history.location.pathname.split('/')[2],
    };

    let notebookPathId = note.notebook_id;
    note.notebook_id
      ? this.props.createNote(note).then((object) => {
          this.props.history.location.pathname = '/';
          this.props.history.replace(
            `notebooks/${notebookPathId}/notes/${object.note.id}`
          );
        })
      : this.props.createNote(note).then((object) => {
          this.props.history.push(`/notes/${object.note.id}`);
        });
  }

  render() {
    return (
      <div className='side-nav'>
        <div className='user-info'>
          <img className='pencil-logo' src={pencilLogo} />
          <p className='user-email'>{this.props.currentUser.email}</p>
        </div>
        <button className='add-btn' onClick={() => this.handleCreate()}>
          <FontAwesomeIcon className='plus-icon' icon={faPlusSquare} />
          New
        </button>
        <div className='sidenav-div-split'>
          <div>
            <button className='home-btn'>
              <FontAwesomeIcon className='home-icon' icon={faHome} />
              <Link to='/notes'>Home</Link>
            </button>
            <button className='notebooks-btn'>
              <FontAwesomeIcon className='book-icon' icon={faBook} />
              <Link to='/notebooks'>Notebooks</Link>
            </button>
            <button className='tags-btn'>
              <FontAwesomeIcon className='tag-icon' icon={faTags} />
              <Link to='/tags'>Tags</Link>
            </button>
            <button className='logout-btn'>
              <FontAwesomeIcon className='logout-icon' icon={faSignOutAlt} />
              <Link to='/' onClick={this.props.logout}>
                Logout
              </Link>
            </button>
          </div>
          <div className='online-links'>
            <ul className='sidenav-links'>
              <li>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://github.com/dmechenko'
                >
                  {' '}
                  <AiFillGithub />
                  Github{' '}
                </a>
              </li>
              <li>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.linkedin.com/in/dmechenko/'
                >
                  {' '}
                  <AiFillLinkedin />
                  LinkedIn{' '}
                </a>
              </li>
              <li>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://angel.co/u/daniel-m-32'
                >
                  {' '}
                  <FaAngellist />
                  AngelList{' '}
                </a>
              </li>
              <li className='last-li-sidenav'>
                {/* <FontAwesomeIcon className='plus-icon' icon={faGlobe} /> */}
                <BsPersonCircle />
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://dmechenko.github.io/portfoliov1.1/'
                >
                  {' '}
                  Personal Site{' '}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidenav;
