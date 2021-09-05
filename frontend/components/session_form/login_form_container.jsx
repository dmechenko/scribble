import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'login',
  };
};

const mDTP = (dispatch) => ({
  processForm: (currentUser) => dispatch(login(currentUser)),
});

export default connect(mSTP, mDTP)(SessionForm);
