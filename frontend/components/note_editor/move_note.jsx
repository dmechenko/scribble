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
    this.props.fetchNote();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateNote(this.state).then(() => this.props.closeModal());
  }

  handleMove(targetNotebook) {
    this.setState({ notebookId: targetNotebook.id }),
      () =>
        this.props
          .updateNote(this.state)
          .then(
            this.props.history.push(
              `/notebooks/${targetNotebook.id}/notes/${this.props.note.id}`
            )
          )
          .then(this.props.closeModal());
  }

  render() {
    debugger;
    let newNotebook;
    return (
      <div className='modal-container'>
        <div className='modal-main'>
          <div className='modal-title'>
            <p className='modal-type'>Choose a notebook to move to:</p>
            <div
              onClick={() => this.props.closeModal()}
              className='close-modal'
            >
              close
            </div>
          </div>
          <div className='modal-notebook-list'>
            <ul>
              {this.props.notebooks.map((notebook) => (
                <li
                  onClick={() => (newNotebook = notebook)}
                  className='modal-notebook-list-item'
                  key={notebook.id}
                >
                  {notebook.title}
                </li>
              ))}
            </ul>
          </div>
          <div className='modal-move-btn'>
            <button onClick={() => this.handleMove(newNotebook)}>
              Continue
            </button>
            <button onClick={() => this.props.closeModal()}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

const mSTP = (state, ownProps) => {
  // debugger;
  return {
    note: state.entities.notes[
      ownProps.history.location.pathname.split('/')[2]
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
