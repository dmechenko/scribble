import React from 'react';
import { Link } from 'react-router-dom';
import NoteIndexItem from './note_index_item';

class NoteIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    if (!this.props.notes) return null;
    let notes = this.props.notes
      .reverse()
      .map((note) => <NoteIndexItem note={note} key={note.id} />);
    return <div className='note-index-container'>{notes}</div>;
  }
}

export default NoteIndex;
