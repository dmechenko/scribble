import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Dropdown from 'react-dropdown';

class NotebookIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDelete() {
    this.props.deleteNotebook(this.props.notebook.id);
  }

  render() {
    // debugger;
    const options = ['one', 'two', 'three'];
    const defaultOption = options[0];

    return (
      <div className='notebook-index-item-container'>
        <div className='notebook-index-item'></div>
        <Link to={`/notebooks/${this.props.notebook.id}/notes`}>
          <div className='notebook-title'>{this.props.notebook.title}</div>
        </Link>
        <div className='notebook-author'>{this.props.user.email}</div>
        <div className='notebook-updated'>{this.props.notebook.updated_at}</div>
        <div className='notebook-actions'>
          <button
            onClick={() => this.handleDelete()}
            className='notebook-action-btn'
          >
            Delete Notebook
          </button>
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
