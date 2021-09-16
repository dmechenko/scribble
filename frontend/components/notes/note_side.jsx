import React from 'react';
import { connect } from 'react-redux';
import { createNote } from '../../actions/note_actions';

class NoteSide extends React.Component {
  handleCreate() {
    let note = {
      title: 'Untitled',
      body: '',
    };
    this.props.createNote(note).then((object) => {
      this.props.history.push(`/notes/${object.note.id}`);
    });
  }

  handleRedirect() {
    window.location = 'https://dmechenko.github.io/aA-SnowBrawl/';
  }

  // handleDrag() {
  //   $(function () {
  //     $('.scratchpad').draggable();
  //   });
  // }
  render() {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    let today = new Date();
    return (
      <div className='side-main-cont'>
        <h1 className='time-header'>
          {today.toLocaleDateString('en-US', options)}
        </h1>
        <div className='side-pieces'>
          <div //onDrag={this.handleDrag}
            className='scratchpad'
          >
            <h1>SCRATCH PAD</h1>
            <textarea
              cols='30'
              rows='10'
              placeholder="Start scribblin'"
            ></textarea>
          </div>
          <div className='game-container'>
            <button onClick={() => this.handleRedirect()} className='game-btn'>
              <p> Time for a short break?</p>
              <p>Try SnowBrawl!</p>
              <img className='snow-link' src={snowLink} />
            </button>
          </div>
          <div className='add-note-secondary'>
            <button
              className='add-btn-side'
              onClick={() => this.handleCreate()}
            >
              <img src={newNote} className='new-note-icon' />
              Create a New Note
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
});

const mDTP = (dispatch) => ({
  createNote: (note) => dispatch(createNote(note)),
});

export default connect(mSTP, mDTP)(NoteSide);
