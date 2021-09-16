import parse from 'html-react-parser';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const NoteIndexItem = (props) => {
  if (!props.note) return null;
  let cleanBody = props.note.body.replace(/<[^>]+>/g, '');

  const formatDate = (updatedAt) => {
    const dateOptions = { month: 'long', day: 'numeric' };
    const dateYearOptions = { month: 'long', day: 'numeric', year: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: '2-digit' };

    const date = new Date(updatedAt);
    let time = Date.now() - Date.parse(date); // parsed date is returned in ms

    if (date.year === Date.now.year && Math.floor(time / 86400000) > 0) {
      // if current year && time > 24h
      return `${date.toLocaleDateString(
        'en-US',
        dateOptions
      )} at ${date.toLocaleTimeString('en-US', timeOptions)}`; // return date without year
    } else if (date.year !== Date.now.year && Math.floor(time / 86400000) > 0) {
      // if not current year && time > 24h
      return `${date.toLocaleDateString(
        'en-US',
        dateYearOptions
      )} at ${date.toLocaleTimeString('en-US', timeOptions)}`; // return date with year
    } else if (Math.floor(time / 3600000) > 0) {
      // if greater than 1h
      return Math.floor(time / 3600000) + ' Hours Ago';
    } else {
      // if greater than 1m
      if (Math.floor(time / 60000) > 1) {
        return Math.floor(time / 60000) + ' Minutes Ago';
      } else {
        if (Math.floor(time / 60000) === 0) {
          return 'Just Now';
        } else {
          return Math.floor(time / 60000) + ' Minute Ago';
        }
      }
    }
  };

  let notebookPath = props.match.params.notebookId;
  // debugger;
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
          <div className='note-updated'>
            {formatDate(props.note.updated_at)}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default withRouter(NoteIndexItem);
