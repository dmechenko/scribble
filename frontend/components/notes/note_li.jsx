import React from 'react';
import NoteIndexItem from './note_index_item';

//intermediary for rendering

class NoteLis extends React.Component {
  render() {
    console.log(this.props.notebookId);
    debugger;
    const notesArray = () => {
      if (this.props.notebookId) {
        return Object.values(this.props.notes).filter(
          (note) => note.notebook_id === this.props.notebookId.id
        );
      } else {
        console.log('hello');
        return Object.values(this.props.notes);
      }
    };

    let noteItem = notesArray()
      .reverse()
      .map((note) => <NoteIndexItem note={note} key={note.id} />);
    return <li>{noteItem}</li>;
  }
}

export default NoteLis;
