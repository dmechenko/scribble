import React from 'react';
import NotebookIndexItem from './notebook_index_item';

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
      />
    ));
    // debugger;
    return (
      <div className='notebook-item-main'>
        <button
          onClick={() => this.handleCreate()}
          className='notebook-action-btn'
        >
          Add Notebook
        </button>
        <div className='notebook-header'>
          <p>TITLE</p>
          <p>CREATED BY</p>
          <p>UPDATED</p>
          <p>ACTIONS</p>
        </div>
        <li>{notebookItem}</li>
      </div>
    );
  }
}

export default NotebookLis;
