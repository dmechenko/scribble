import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const NotebookIndexItem = (props) => {
  if (!props.notebook) return null;
  return (
    <div className='notebook-index-item-container'>
      <div className='notebook-index-item'></div>
      <Link to={`/notebooks/${props.notebook.id}/notes`}>
        <div className='notebook-title'>{props.notebook.title}</div>
      </Link>
      <div className='notebook-author'>{props.notebook.author_id}</div>
      <div className='notebook-updated'>{props.notebook.updated_at}</div>
      <div className='notebook-actions'>...</div>
    </div>
  );
};

export default withRouter(NotebookIndexItem);
