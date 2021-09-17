import React from 'react';
import NoteLis from './note_li';
import Modal from '../modal/modal';
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

    const modalDisplay = (
      <div className='notebook-edit-btn-container'>
        <button
          className='notebook-edit-btn'
          onClick={() => this.props.openModal('edit-notebook')}
        >
          Rename Notebook
        </button>
      </div>
    );

    return (
      <div className='note-main'>
        <Modal />
        <div className='note-index-count'>
          <span>
            <div className='notebook-icon'>
              <FontAwesomeIcon icon={faStickyNote} />
            </div>
            {/* Notes */}
            {this.props.notebookId ? this.props.notebookId.title : 'Notes'}
          </span>
          <p>
            {notesArray()} {notesArray() === 1 ? 'note' : 'notes'}
          </p>
          <div>{this.props.notebookId ? modalDisplay : null}</div>
        </div>
        <ul className='note-index-container'>
          <NoteLis
            notes={this.props.notes}
            notebookId={this.props.notebookId}
            openModal={this.props.openModal}
          />
        </ul>
      </div>
    );
  }
}

export default NoteIndex;
