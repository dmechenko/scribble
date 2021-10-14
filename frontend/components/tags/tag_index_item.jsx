import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const TagIndexItem = (props) => {
  if (!props.tag) return null;

  return (
    <div className='tag-index-item-container'>
      <div className='tag-index-item'>
        <div className='title'>{props.tag.title}</div>
      </div>
    </div>
  );
};

export default withRouter(TagIndexItem);
