import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import {
  createNote,
  fetchNote,
  fetchNotes,
  updateNote,
  deleteNote,
} from '../../actions/note_actions';
import { createTag, fetchTags } from '../../actions/tag_actions';
import NoteEditor from './note_editor';

const mSTP = (state, ownProps) => {
  return {
    note: state.entities.notes[ownProps.match.params.noteId],
    noteId: state.entities.notes[ownProps.match.params.noteId],
    notes: state.entities.notes,
    // tags: Object.values(state.entities.tags).filter((tag) => {
    //   return tag.note_id_array.includes(
    //     state.entities.notes[ownProps.match.params.noteId].id
    //   );
    // }),
    tags: Object.values(state.entities.tags),
  };
};

const mDTP = (dispatch) => ({
  fetchNotes: () => dispatch(fetchNotes()),
  fetchNote: (noteId) => dispatch(fetchNote(noteId)),
  createNote: (note) => dispatch(createNote(note)),
  updateNote: (note) => dispatch(updateNote(note)),
  deleteNote: (noteId) => dispatch(deleteNote(noteId)),
  openModal: (modal) => dispatch(openModal(modal)),
  fetchTags: () => dispatch(fetchTags()),
  createTag: (tag) => dispatch(createTag(tag)),
  updateTag: (tag) => dispatch(updateTag(tag)),
});

export default connect(mSTP, mDTP)(NoteEditor);
