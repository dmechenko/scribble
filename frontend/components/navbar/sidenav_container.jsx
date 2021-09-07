import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createNote } from '../../actions/note_actions';
import { logout } from '../../actions/session_actions';
import Sidenav from './sidenav';

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  createNote: (note) => dispatch(createNote(note)),
});

export default withRouter(connect(mSTP, mDTP)(Sidenav));
