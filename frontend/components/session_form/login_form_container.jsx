import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'login',
  };
};

const mDTP = (dispatch) => ({
  processForm: (currentUser) => dispatch(login(currentUser)),
  login: (currentUser) => dispatch(login(currentUser)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mSTP, mDTP)(SessionForm);
