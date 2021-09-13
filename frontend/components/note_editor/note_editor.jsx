import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import { debounce } from 'debounce';
// import 'react-quill/dist/quill.snow.css';

class NoteEditor extends React.Component {
  constructor(props) {
    super(props);
    this.today = new Date();
    this.state = {
      id: props.match.params.noteId,
      title: '',
      body: '',
      updated_at: this.today.toLocaleDateString('en-US'),
    };
  }

  componentDidMount() {
    this.props.fetchNote(this.props.match.params.noteId).then((object) => {
      this.setState({
        title: object.note.title,
        body: object.note.body,
        updated_at: object.note.updated_at,
      });
    });
    this.props.fetchNotes();
  }

  componentDidUpdate(prevProps) {
    if (this.props.noteId !== prevProps.noteId) this.setState(this.props.note);
  }

  handleChange(field) {
    return (e) => {
      return this.setState({ [field]: e.target.value }, () =>
        this.props.updateNote(this.state)
      );
    };
  }

  deleteNote() {
    let notes = Object.values(this.props.notes);
    let nextNote;
    notes.length > 1 ? (nextNote = notes[notes.length - 2].id) : nextNote;
    nextNote
      ? this.props
          .deleteNote(this.state.id)
          .then(this.props.history.push(`/notes/${nextNote}`))
      : this.props
          .deleteNote(this.state.id)
          .then(this.props.history.push(`/notes/`));
  }

  render() {
    return (
      <div className='note-container'>
        <div className='note-title-container'>
          <input
            type='text'
            value={this.state.title}
            onChange={this.handleChange('title')}
          />
          <button onClick={() => this.deleteNote()}>Delete</button>
        </div>
        <div className='quill-container'>
          <ReactQuill
            theme='snow'
            value={this.state.body}
            placeholder='start scribbling'
            onChange={debounce(
              (value) =>
                this.setState({ body: value }, () =>
                  this.props.updateNote(this.state)
                ),
              200
            )}
          />
        </div>
      </div>
    );
  }
}

export default NoteEditor;
