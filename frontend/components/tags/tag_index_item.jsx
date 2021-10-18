import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const TagIndexItem = (props) => {
  if (!props.tag) return null;

  function handleDelete(e) {
    e.preventDefault();
    props.deleteTag(props.tag.id);
  }

  return (
    <div className='tag-index-item-container'>
      <div className='tag-index-item'>
        <Link to={`/tags/${props.tag.id}`}>
          <div className='title'>{props.tag.title}</div>
        </Link>
        <button
          onClick={(e) => handleDelete(e)}
          className='notebook-action-btn'
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default withRouter(TagIndexItem);
