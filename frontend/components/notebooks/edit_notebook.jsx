import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { updateNotebook } from '../../actions/notebook_actions';

class EditNotebook extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.notebook;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateNotebook(this.state).then(() => this.props.closeModal());
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  render() {
    // debugger;
    return (
      <div className='modal-container'>
        <div className='modal-main'>
          <div className='modal-title'>
            <p className='modal-type'>Rename Notebook</p>
            <div
              onClick={() => this.props.closeModal()}
              className='close-modal'
            >
              close
            </div>
          </div>
          <div className='modal-form-container'>
            <form onSubmit={(e) => this.handleSubmit(e)} className='modal-form'>
              <label>
                Title
                <input
                  type='text'
                  value={this.state.title}
                  onChange={this.handleChange('title')}
                  placeholder='Enter a title for your new notebook'
                />
              </label>
              <button>Continue</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mSTP = (state, ownProps) => ({
  notebook: state.entities.notebooks[ownProps.match.params.notebookId],
});

const mDTP = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  updateNotebook: (notebook) => dispatch(updateNotebook(notebook)),
});

export default withRouter(connect(mSTP, mDTP)(EditNotebook));
