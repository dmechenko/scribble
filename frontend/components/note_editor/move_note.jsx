import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { fetchNotebooks } from '../../actions/notebook_actions';
import { fetchNote, updateNote } from '../../actions/note_actions';

class MoveNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.note;
  }

  componentDidMount() {
    this.props.fetchNote(this.props.note.id);
  }

  changeNotebook(notebook) {
    this.setState({
      ['notebook_id']: notebook.id,
    });
  }

  handleMove() {
    this.props
      .updateNote(this.state)
      .then(
        this.props.history.push(
          `/notebooks/${this.state.notebook_id}/notes/${this.state.id}`
        )
      )
      .then(() => this.props.closeModal());
  }

  //e.currentTarget.__reactFiber$kguov6shfk8.key

  render() {
    return (
      <div className='modal-container'>
        <div className='modal-main'>
          <div className='modal-title-move'>
            <p className='modal-type'>Move note to...</p>
            <div
              onClick={() => this.props.closeModal()}
              className='close-modal'
            >
              ✖
            </div>
          </div>
          <div className='modal-notebook-list'>
            <ul>
              {this.props.notebooks.map((notebook) => {
                if (this.props.note.notebook_id === notebook.id) {
                  return (
                    <li
                      value={notebook.id}
                      onClick={() => this.changeNotebook(notebook)}
                      className='modal-notebook-list-item'
                      key={notebook.id}
                    >
                      <FontAwesomeIcon
                        className='modal-book-icon'
                        icon={faBook}
                      />
                      {notebook.title} (current)
                    </li>
                  );
                } else {
                  return (
                    <li
                      value={notebook.id}
                      onClick={() => this.changeNotebook(notebook)}
                      className='modal-notebook-list-item'
                      key={notebook.id}
                    >
                      {' '}
                      <FontAwesomeIcon
                        className='modal-book-icon'
                        icon={faBook}
                      />
                      {notebook.title}
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <div className='modal-move-btn'>
            <button
              className='modal-continue'
              onClick={() => this.handleMove()}
            >
              Continue
            </button>
            <button
              className='modal-cancel'
              onClick={() => this.props.closeModal()}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mSTP = (state, ownProps) => {
  return {
    note: state.entities.notes[
      ownProps.history.location.pathname.split('/').slice(-1)
    ],
    notebooks: Object.values(state.entities.notebooks),
  };
};

const mDTP = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  updateNote: (note) => dispatch(updateNote(note)),
  fetchNote: (noteId) => dispatch(fetchNote(noteId)),
  fetchNotebooks: () => dispatch(fetchNotebooks()),
});

export default withRouter(connect(mSTP, mDTP)(MoveNote));
