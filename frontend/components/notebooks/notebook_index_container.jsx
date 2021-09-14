import { connect } from 'react-redux';
import {
  createNotebook,
  deleteNotebook,
  fetchNotebook,
  fetchNotebooks,
  updateNotebook,
} from '../../actions/notebook_actions';
import NotebookIndex from './notebook_index';

const mSTP = (state) => ({
  notebooks: Object.values(state.entities.notebooks),
  user: Object.values(state.entities.users),
});

const mDTP = (dispatch) => ({
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  fetchNotebook: (notebookId) => dispatch(fetchNotebook(notebookId)),
  createNotebook: (notebook) => dispatch(createNotebook(notebook)),
  updateNotebook: (notebook) => dispatch(updateNotebook(notebook)),
  deleteNotebook: (notebookId) => dispatch(deleteNotebook(notebookId)),
});

export default connect(mSTP, mDTP)(NotebookIndex);
