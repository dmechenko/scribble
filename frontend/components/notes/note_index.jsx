import React from 'react';
import { Link } from 'react-router-dom';

class NoteIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return (
      <div className='note-index-container'>
        <NoteIndexItem note={note} id={note.id} />
      </div>
    );
  }
}

export default NoteIndex;
