import parse from 'html-react-parser';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { cleanDate } from '../../util/helper_util';

const NoteIndexItem = (props) => {
  if (!props.note) return null;
  // let cleanBody = props.note.body.replace(/<[^>]+>/g, '');
  // Switched to HTML-React-Parser to keep color/images in NoteIndexItem body.

  let notebookPath = props.match.params.notebookId;
  let path;
  if (notebookPath) {
    path = `/notebooks/${notebookPath}/notes/${props.note.id}`;
  } else {
    path = `/notes/${props.note.id}`;
  }
  return (
    <Link to={`${path}`}>
      <div className='note-index-item-container'>
        <div className='note-index-item'>
          <div className='title'>{props.note.title}</div>
          {/* <div className='body'>{cleanBody}</div> */}
          <div className='body'>{parse(props.note.body)}</div>
          <div className='note-updated'>{cleanDate(props.note.updated_at)}</div>
        </div>
      </div>
    </Link>
  );
};

export default withRouter(NoteIndexItem);
