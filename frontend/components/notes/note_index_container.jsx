import { connect } from 'react-redux';
import { fetchNotes } from '../../actions/note_actions';
import NoteIndex from './note_index';

const mSTP = (state) => ({
  notes: Object.values(state.notes),
});

const mDTP = (dispatch) => ({
  fetchNotes: () => dispatch(fetchNotes()),
});

export default connect(mSTP, mDTP)(NoteIndex);
