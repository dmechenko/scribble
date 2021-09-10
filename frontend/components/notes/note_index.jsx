import React from 'react';
import NoteLis from './note_li';

class NoteIndex extends React.Component {
  render() {
    return (
      <ul className='note-index-container'>
        <NoteLis notes={this.props.notes} />
      </ul>
    );
  }
}

export default NoteIndex;
