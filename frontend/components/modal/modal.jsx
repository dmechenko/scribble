import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import AddNotebook from '../notebooks/add_notebook';
import EditNotebook from '../notebooks/edit_notebook';
import MoveNote from '../note_editor/move_note';

const Modal = ({ modal, closeModal }) => {
  if (!modal) return null;

  let component;
  switch (modal) {
    case 'create-notebook':
      component = <AddNotebook />;
      break;
    case 'edit-notebook':
      component = <EditNotebook />;
      break;
    case 'move-note':
      component = <MoveNote />;
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
