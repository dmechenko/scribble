import React from 'react';
import { Link } from 'react-router-dom';

class Sidenav extends React.Component {
  constructor(props) {
    super(props);
  }

  handleCreate() {
    let note = {
      title: 'Untitled',
      body: '',
    };
    this.props.createNote(note).then((object) => {
      this.props.history.push(`/notes/${object.note.id}`);
    });
  }

  render() {
    let { logout, currentUser } = this.props;
    return (
      <div className='side-nav'>
        <div className='user-info'>
          <img className='pencil-logo' src={pencilLogo} />
          <p className='user-email'>{currentUser.email}</p>
        </div>
        <button className='add-btn' onClick={() => this.handleCreate()}>
          Add Note
        </button>
        <ul className='side-nav-uc'>
          <li>
            <Link to='/' onClick={logout}>
              Sign Out
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidenav;
