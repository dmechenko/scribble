import React from 'react';
import NoteIndexItem from './note_index_item';
//intermediary for rendering

class NoteLis extends React.Component {
  render() {
    let noteItem = Object.values(this.props.notes)
      .reverse()
      .map((note) => <NoteIndexItem note={note} key={note.id} />);
    return <li>{noteItem}</li>;
  }
}

export default NoteLis;
