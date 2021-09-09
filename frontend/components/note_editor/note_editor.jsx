import React, { Component } from 'react';
import ReactQuill from 'react-quill';

class NoteEditor extends React.Component {
  constructor(props) {
    super(props);
    this.today = new Date();
    this.state = {
      id: 0,
      title: '',
      body: '',
      updated_at: this.today.toLocaleDateString('en-US'),
    };
  }

  componentDidMount() {
    this.props.fetchNotes().then((object) => {
      this.setState({ note: object.note });
    });
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.target.value });
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
        </div>
        <div className='quill-container'>
          <ReactQuill
            theme='snow'
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
