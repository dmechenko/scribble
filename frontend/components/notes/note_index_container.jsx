import { connect } from 'react-redux';
import { fetchNotes } from '../../actions/note_actions';
import { fetchNotebooks } from '../../actions/notebook_actions';
import NoteIndex from './note_index';

const mSTP = (state, ownProps) => {
  // debugger;
  return {
    notes: Object.values(state.entities.notes),
    notebookId: state.entities.notebooks[ownProps.match.params.notebookId],
  };
};

const mDTP = (dispatch) => ({
  fetchNotes: () => dispatch(fetchNotes()),
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  // fetchNotebook: (notebookId) => dispatch(fetchNotebook(notebookId)),
});

export default connect(mSTP, mDTP)(NoteIndex);
