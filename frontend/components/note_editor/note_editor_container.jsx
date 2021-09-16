import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import {
  createNote,
  fetchNote,
  fetchNotes,
  updateNote,
  deleteNote,
} from '../../actions/note_actions';
import NoteEditor from './note_editor';

const mSTP = (state, ownProps) => {
  // debugger;
  return {
    note: state.entities.notes[ownProps.match.params.noteId],
    noteId: state.entities.notes[ownProps.match.params.noteId],
    notes: state.entities.notes,
    // updatedAt: state.entities.notes[ownProps.match.params.noteId].updated_at,
  };
};

const mDTP = (dispatch) => ({
  fetchNotes: () => dispatch(fetchNotes()),
  fetchNote: (noteId) => dispatch(fetchNote(noteId)),
  createNote: (note) => dispatch(createNote(note)),
  updateNote: (note) => dispatch(updateNote(note)),
  deleteNote: (noteId) => dispatch(deleteNote(noteId)),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mSTP, mDTP)(NoteEditor);
