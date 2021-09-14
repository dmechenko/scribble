import React from 'react';
import NoteLis from './note_li';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons';

class NoteIndex extends React.Component {
  componentDidMount() {
    this.props.fetchNotes();
    this.props.fetchNotebooks();
  }
  render() {
    const notesArray = () => {
      if (this.props.notebookId) {
        return Object.values(this.props.notes).filter(
          (note) => note.notebook_id === this.props.notebookId.id
        ).length;
      } else {
        return Object.values(this.props.notes).length;
      }
    };
    // const notebookExists = () => {
    //   this.props.notebookId ? this.props.notebookId : 'Notes';
    // };
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
          <span>
            <div className='notebook-icon'>
              <FontAwesomeIcon icon={faStickyNote} />
            </div>
            {/* Notes */}
            {this.props.notebookId ? this.props.notebookId.title : 'Notes'}
          </span>
          <p>{notesArray()} notes</p>
        </div>
        <ul className='note-index-container'>
          <NoteLis
            notes={this.props.notes}
            notebookId={this.props.notebookId}
          />
        </ul>
      </div>
    );
  }
}

export default NoteIndex;
