import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'signup',
});

const mDTP = (dispatch) => ({
  processForm: (currentUser) => dispatch(signup(currentUser)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mSTP, mDTP)(SessionForm);
