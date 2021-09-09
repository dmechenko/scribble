import React, { Component } from 'react';
import ReactQuill, { Quill } from 'react-quill';

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
      this.setState({ title: object.note.title, body: object.note.body });
    });
    this.props.fetchNotes();
  }

  handleChange(field) {
    return (e) => {
      return this.setState({ [field]: e.target.value }, () =>
        this.props.updateNote(this.state)
      );
    };
  }

  deleteNote() {
    debugger;
    this.props.deleteNote(this.state.id);
    window.location.reload();
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
            onChange={(value) =>
              this.setState({ body: value }, () =>
                this.props.updateNote(this.state)
              )
            }
          />
        </div>
        <p>Last updated: {this.state.updated_at}</p>
      </div>
    );
  }
}

export default NoteEditor;
