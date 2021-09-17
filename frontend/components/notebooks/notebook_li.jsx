import React from 'react';
import NotebookIndexItem from './notebook_index_item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookMedical } from '@fortawesome/free-solid-svg-icons';

class NotebookLis extends React.Component {
  handleCreate() {
    let notebook = {
      title: 'New Notebook',
    };
    this.props.createNotebook(notebook);
  }

  render() {
    let notebookItem = Object.values(this.props.notebooks).map((notebook) => (
      <NotebookIndexItem
        notebook={notebook}
        key={notebook.id}
        user={this.props.user}
        fetchNotebook={this.props.fetchNotebook}
        createNotebook={this.props.createNotebook}
        deleteNotebook={this.props.deleteNotebook}
        updateNotebook={this.props.updateNotebook}
        openModal={this.props.openModal}
      />
    ));

    return (
      <div className='notebook-item-main'>
        <button
          onClick={() => this.props.openModal('create-notebook')}
          className='notebook-add-btn'
        >
          <FontAwesomeIcon className='add-nb-icon' icon={faBookMedical} />
          Add Notebook
        </button>
        <div className='notebook-header'>
          <p className='nb-header-title'>TITLE</p>
          <p className='nb-header-author'>CREATED BY</p>
          <p className='nb-header-update'>UPDATED</p>
          <p className='nb-header-action'>ACTIONS</p>
        </div>
        <li>{notebookItem}</li>
      </div>
    );
  }
}

export default NotebookLis;
