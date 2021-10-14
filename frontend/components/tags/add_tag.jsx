import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { createTag } from '../../actions/tag_actions';

class AddTag extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTag(this.state).then(() => this.props.closeModal());
    // reset title for each new tag
    this.setState({ title: '' });
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  render() {
    return (
      <div className='modal-container'>
        <div className='modal-main-add'>
          <div className='modal-title-add'>
            <p className='modal-type'>Create new tag</p>
            <div
              onClick={() => this.props.closeModal()}
              className='close-modal'
            >
              ✖
            </div>
          </div>
          <div className='modal-form-container'>
            <form onSubmit={(e) => this.handleSubmit(e)} className='modal-form'>
              <label>
                <p className='nb-comment'>
                  Tags let you add keywords to notes, making them easier to find
                  and browse.{' '}
                </p>
                <p className='nb-title'>Name</p>
                <input
                  type='text'
                  value={this.state.title}
                  onChange={this.handleChange('title')}
                  placeholder='New notebook'
                />
              </label>
              <button className='add-nb-btn'>Create</button>
            </form>
            {/* <button
              className='modal-cancel'
              onClick={() => this.props.closeModal()}
            >
              Cancel
            </button> */}
          </div>
        </div>
      </div>
    );
  }
}

const mDTP = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  createTag: (tag) => dispatch(createTag(tag)),
});

export default connect(null, mDTP)(AddTag);
