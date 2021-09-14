import { connect } from 'react-redux';
import {
  createNote,
  fetchNote,
  fetchNotes,
  updateNote,
  deleteNote,
} from '../../actions/note_actions';
import NoteEditor from './note_editor';

const mSTP = (state, ownProps) => {
  return {
    note: state.entities.notes[ownProps.match.params.noteId],
    noteId: state.entities.notes[ownProps.match.params.noteId],
    notes: state.entities.notes,
  };
};

const mDTP = (dispatch) => ({
  fetchNotes: () => dispatch(fetchNotes()),
  fetchNote: (noteId) => dispatch(fetchNote(noteId)),
  createNote: (note) => dispatch(createNote(note)),
  updateNote: (note) => dispatch(updateNote(note)),
  deleteNote: (noteId) => dispatch(deleteNote(noteId)),
});

export default connect(mSTP, mDTP)(NoteEditor);
