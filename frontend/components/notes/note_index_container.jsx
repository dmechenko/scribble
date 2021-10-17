import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { fetchNotes } from '../../actions/note_actions';
import { fetchNotebooks } from '../../actions/notebook_actions';
import NoteIndex from './note_index';
import { withRouter } from 'react-router-dom';
import { fetchTags, updateTag } from '../../actions/tag_actions';

const mSTP = (state, ownProps) => {
  return {
    notes: Object.values(state.entities.notes),
    notebookId: state.entities.notebooks[ownProps.match.params.notebookId],
    tags: Object.values(state.entities.tags),
  };
};

const mDTP = (dispatch) => ({
  fetchNotes: () => dispatch(fetchNotes()),
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  // fetchNotebook: (notebookId) => dispatch(fetchNotebook(notebookId)),
  openModal: (modal) => dispatch(openModal(modal)),
  fetchTags: () => dispatch(fetchTags()),
  updateTag: (tag) => dispatch(updateTag(tag)),
});

export default withRouter(connect(mSTP, mDTP)(NoteIndex));
