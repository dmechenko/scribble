import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faBook,
  faSignOutAlt,
  faPlusSquare,
} from '@fortawesome/free-solid-svg-icons';

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
    // debugger;
    let notebookPathId = note.notebook_id;
    note.notebook_id
      ? // ? this.props.createNote(note).then((object) => {
        //     this.props.history.location.pathname = '/';
        //     this.props.history.replace(
        //       `notebooks/${notebookPathId}/notes/${object.note.id}`
        //     );
        //   })
        this.props.createNote(note).then((object) => {
          this.props.history.push(`/notes/${object.note.id}`);
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
        <button className='home-btn'>
          <FontAwesomeIcon className='home-icon' icon={faHome} />
          <Link to='/notes'>Home</Link>
        </button>
        <button className='notebooks-btn'>
          <FontAwesomeIcon className='book-icon' icon={faBook} />
          <Link to='/notebooks'>Notebooks</Link>
        </button>
        <button className='logout-btn'>
          <FontAwesomeIcon className='logout-icon' icon={faSignOutAlt} />
          <Link to='/' onClick={this.props.logout}>
            Logout
          </Link>
        </button>
      </div>
    );
  }
}

export default Sidenav;
