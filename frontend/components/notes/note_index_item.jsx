import React from 'react';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

const NoteIndexItem = (props) => {
  return (
    <div className='note-index-item-container'>
      <div className='note-index-item'>
        <div className='title'>{props.note.title}</div>
        <div className='body'>{props.note.body}</div>
        <div className='note-updated'>{props.note.updatedAt}</div>
      </div>
    </div>
  );
};

export default NoteIndexItem;
