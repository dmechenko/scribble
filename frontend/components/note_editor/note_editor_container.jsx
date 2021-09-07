import { connect } from 'react-redux';
import {
  createNote,
  fetchNote,
  fetchNotes,
  updateNote,
} from '../../actions/note_actions';
import NoteEditor from './note_editor';

const mSTP = (state, ownProps) => ({
  note: state.entities.notes[ownProps.match.params.noteId],
});

const mDTP = (dispatch) => ({
  fetchNotes: () => dispatch(fetchNotes()),
  fetchNote: (noteId) => dispatch(fetchNote(noteId)),
  createNote: (note) => dispatch(createNote(note)),
  updateNote: (note) => dispatch(updateNote(note)),
  deleteNote: (noteId) => dispatch(deleteNote(noteId)),
});

export default connect(mSTP, mDTP)(NoteEditor);
