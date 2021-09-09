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
  }

  handleChange(field) {
    return (e) => {
      return this.setState({ [field]: e.target.value }, () =>
        this.props.updateNote(this.state)
      );
    };
  }

  // quillOnChange(content, delta, source, editor){
  //   this.setState ({ content: html })
  // }

  render() {
    // let options = {
    //   debug: 'info',
    //   modules: {
    //     toolbar: '#toolbar',
    //   },
    //   placeholder: 'Compose an epic...',
    //   readOnly: true,
    //   theme: 'snow',
    // };

    // let QuillEditor = new Quill('#editor', options);

    return (
      <div className='note-container'>
        <div className='note-title-container'>
          <input
            type='text'
            value={this.state.title}
            onChange={this.handleChange('title')}
          />
        </div>
        <div className='quill-container'>
          {/* <QuillEditor
            value={this.state.body}
            onChange={this.handleChange('body')}
          /> */}
          <ReactQuill
            theme='snow'
            readOnly={true}
            value={this.state.body}
            placeholder='start scribbling'
            onChange={this.handleChange('body')}
          />
        </div>
        <p>Last updated: {this.state.updated_at}</p>
      </div>
    );
  }
}

export default NoteEditor;