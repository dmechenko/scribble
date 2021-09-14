import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import { debounce } from 'debounce';
// import 'react-quill/dist/quill.snow.css';

class NoteEditor extends React.Component {
  constructor(props) {
    super(props);
    this.today = new Date();
    this.state = {
      id: this.props.match.params.noteId,
      title: '',
      body: '',
    };
  }

  componentDidMount() {
    this.props.fetchNotes();
    // this.props.fetchNote(this.props.match.params.noteId).then((object) => {
    //   this.setState({
    //     title: object.note.title,
    //     body: object.note.body,
    //     updated_at: this.state.updated_at,
    //   });
    // });
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
    debugger;
    const formats = [
      'header',
      'font',
      'size',
      'bold',
      'italic',
      'underline',
      'blockquote',
      'list',
      'bullet',
      'indent',
      'link',
      'image',
      'video',
      'color',
    ];

    const modules = {
      toolbar: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ color: [] }, { background: [] }],
        ['link', 'image', 'video'],
        ['clean'],
      ],
    };
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
            modules={modules}
            formats={formats}
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
