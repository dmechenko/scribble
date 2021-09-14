import React from 'react';
import NotebookIndexItem from './notebook_index_item';

class NotebookLis extends React.Component {
  render() {
    let notebookItem = Object.values(this.props.notebooks).map((notebook) => (
      <NotebookIndexItem notebook={notebook} key={notebook.id} />
    ));
    return (
      <div className='notebook-item-main'>
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
