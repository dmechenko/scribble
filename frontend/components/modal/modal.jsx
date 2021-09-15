import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import AddNotebook from '../notebooks/add_notebook';

const Modal = ({ modal, closeModal }) => {
  if (!modal) return null;

  let component;
  switch (modal) {
    case 'create-notebook':
      component = <AddNotebook />;
      break;
    default:
      return null;
  }
  // debugger;
  return (
    <div className='modal-background' onClick={closeModal}>
      <div className='modal-child' onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
};

const mSTP = (state) => ({
  modal: state.ui.modal,
});

const mDTP = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(Modal);
