import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { createNotebook } from '../../actions/notebook_actions';

class AddNotebook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNotebook(this.state).then(() => this.props.closeModal());
    // reset title for each new notebook
    this.setState({ title: '' });
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }
  render() {
    return (
      <div className='modal-container'>
        <div className='modal-main'>
          <div className='modal-title'>
            <p className='modal-type'>Add a Notebook</p>
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
              <button>Add New Notebook</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// const mSTP = (state) => ({
//   notebook: {
//     title: '',
//   },
// });

const mDTP = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  createNotebook: (notebook) => dispatch(createNotebook(notebook)),
});

export default connect(null, mDTP)(AddNotebook);
