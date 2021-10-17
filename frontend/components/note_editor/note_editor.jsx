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
    this.props.fetchNote(this.props.match.params.noteId).then((object) => {
      this.setState({
        title: object.note.title,
        body: object.note.body,
        updated_at: this.state.updated_at,
      });
    });
    this.props.fetchTags();
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
    let notes = Object.values(this.props.notes); //notes array
    let nextNote;
    notes.length > 1 ? (nextNote = notes[notes.length - 2].id) : nextNote;
    //if there are any notes left, set nextNote to be the id of the second to last note in the array
    nextNote //if there is a next note, change url to the next id
      ? this.props
          .deleteNote(this.state.id)
          .then(this.props.history.push(`/notes/${nextNote}`))
      : this.props
          .deleteNote(this.state.id)
          .then(this.props.history.push(`/notes/`)); // otherwise, just go back to notes main
  }

  handleAddTag(tag) {
    if (!tag) return null;
    tag.note_id_array.push(this.props.note.id);
    this.props.updateTag(tag);
  }

  render() {
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
    // const noteTags = this.props.tags.filter((tag) => {
    //   return tag.note_id_array.includes(this.props.note.id);
    // });

    // debugger;
    return (
      <div className='note-container'>
        <div className='note-title-container'>
          <input
            type='text'
            value={this.state.title}
            onChange={this.handleChange('title')}
          />
          <button
            className='move-note-btn'
            onClick={() => this.props.openModal('move-note')}
          >
            Move
          </button>
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
                this.setState({ body: value }, () => {
                  this.props.updateNote(this.state);
                }),
              500 //update every x milliseconds
            )}
          />
        </div>
        {/* <div>
          {this.props.tags.map((tag) => {
            return (
              <li className='note-tag-show' key={tag.id}>
                {tag.title}
              </li>
            );
          })}
        </div> */}
        <div className='note-tag-show'>
          <button
            className='tag-create'
            onClick={() => this.props.openModal('create-tag')}
          >
            New Tag
          </button>
          {this.props.tags.map((tag) => {
            return (
              <div onClick={() => this.handleAddTag(tag)}>
                <li>{tag.title}</li>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default NoteEditor;
