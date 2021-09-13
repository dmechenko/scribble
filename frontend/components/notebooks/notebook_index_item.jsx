import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const NotebookIndexItem = (props) => {
  if (!props.notebook) return null;

  return (
    <div className='notebook-index-item-container'>
      <div className='notebook-index-item'>
        <div className='notebook-title'>{props.notebook.title}</div>
      </div>
    </div>
  );
};

export default withRouter(NotebookIndexItem);
