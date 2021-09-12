import React from 'react';
import NoteLis from './note_li';

class NoteIndex extends React.Component {
  componentDidMount() {
    this.props.fetchNotes();
  }
  render() {
    // debugger;
    return (
      // <ul className='note-index-container'>
      //   <div className='note-index-count'>
      //     <p>Notes</p>
      //     <p>{this.props.notes.length} notes</p>
      //   </div>
      //   <NoteLis notes={this.props.notes} />
      // </ul>
      <div className='note-main'>
        <div className='note-index-count'>
          <p>Notes</p>
          <p>{this.props.notes.length} notes</p>
        </div>
        <ul className='note-index-container'>
          <NoteLis notes={this.props.notes} />
        </ul>
      </div>
    );
  }
}

export default NoteIndex;
