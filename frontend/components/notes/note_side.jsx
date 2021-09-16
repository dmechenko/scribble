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

  // handleDrag() {
  //   $(function () {
  //     $('.scratchpad').draggable();
  //   });
  // }
  render() {
    return (
      <div>
        <h1 className='time-header'>THE TIME IS NOW</h1>
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
            <button className='game-btn'>Game goes Here</button>
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
