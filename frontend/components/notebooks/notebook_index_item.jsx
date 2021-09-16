import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import { cleanDate } from '../../util/helper_util';
import { openModal } from '../../actions/modal_actions';
import Modal from '../modal/modal';

class NotebookIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.notebook;
  }

  handleDelete(e) {
    e.stopPropagation();
    confirm(
      'Are you certain you want to delete this notebook?\nAll associated notes will be lost.'
    )
      ? this.props.deleteNotebook(this.props.notebook.id)
      : null;
  }

  // handleRename(e) {
  //   e.stopPropagation();
  //   this.props
  //     .fetchNotebook(this.state.id)
  //     .then(() => this.props.openModal('edit-notebook'));
  // }

  // userConfirm() {
  //   let decision;
  //   const areYouSure = confirm(
  //     'Are you certain you want to delete this notebook?\nAll associated notes will be lost.'
  //   );
  //   if (areYouSure) {
  //     decision = true;
  //   } else {
  //     decision = false;
  //   }
  //   if (decision) this.handleDelete();
  // }

  render() {
    // debugger;
    // const options = ['one', 'two', 'three'];
    // const defaultOption = options[0];

    return (
      <div className='notebook-index-item-container'>
        <Modal />
        <div className='notebook-index-item'></div>
        <Link
          className='nb-link'
          to={`/notebooks/${this.props.notebook.id}/notes`}
        >
          <div className='notebook-title'>{this.props.notebook.title}</div>
        </Link>
        <div className='notebook-author'>{this.props.user.email}</div>
        <div className='notebook-updated'>
          {cleanDate(this.props.notebook.updated_at)}
        </div>
        <div className='notebook-actions'>
          <button
            onClick={(e) => this.handleDelete(e)}
            className='notebook-action-btn'
          >
            Delete
          </button>
          {/* <button
            onClick={(e) => this.handleRename(e)}
            className='notebook-action-btn'
          >
            Rename
          </button> */}
          {/* <Dropdown
            options={options}
            onChange={this._onSelect}
            value={defaultOption}
            placeholder='Select an option'
          ></Dropdown> */}
        </div>
      </div>
    );
  }
}

export default withRouter(NotebookIndexItem);

// const NotebookIndexItem = (props) => {
//   if (!props.notebook) return null;
//   debugger;
//   return (
//     <div className='notebook-index-item-container'>
//       <div className='notebook-index-item'></div>
//       <Link to={`/notebooks/${props.notebook.id}/notes`}>
//         <div className='notebook-title'>{props.notebook.title}</div>
//       </Link>
//       <div className='notebook-author'>{props.notebook.author_id}</div>
//       <div className='notebook-updated'>{props.notebook.updated_at}</div>
//       <div className='notebook-actions'>...</div>
//     </div>
//   );
// };
