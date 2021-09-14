import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const NoteIndexItem = (props) => {
  if (!props.note) return null;
  let cleanBody = props.note.body.replace(/<[^>]+>/g, '');
  return (
    <Link to={`/notes/${props.note.id}`}>
      <div className='note-index-item-container'>
        <div className='note-index-item'>
          <div className='title'>{props.note.title}</div>
          <div className='body'>{cleanBody}</div>
          <div className='note-updated'>{props.note.updated_at}</div>
        </div>
      </div>
    </Link>
  );
};

export default withRouter(NoteIndexItem);
