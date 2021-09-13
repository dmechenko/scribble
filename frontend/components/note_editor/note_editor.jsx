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
      updated_at: this.formatDate(new Date()), //this.today.toLocaleDateString('en-US'),
    };
  }

  formatDate(createdAt) {
    const dateOptions = { month: 'long', day: 'numeric' };
    const dateYearOptions = { month: 'long', day: 'numeric', year: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: '2-digit' };

    const date = new Date(createdAt);
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
      return Math.floor(time / 3600000) + 'h';
    } else {
      // if greater than 1m
      return Math.floor(time / 60000) + 'm';
    }
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
