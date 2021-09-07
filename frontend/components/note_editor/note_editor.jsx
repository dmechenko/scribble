import React, { Component } from 'react';
import ReactQuill from 'react-quill';

class NoteEditor extends React.Component {
  constructor(props) {
    super(props);
    const today = new Date();
    this.state = {
      id: 0,
      title: '',
      body: '',
      updated_at: today.toLocaleDateString('en-US'),
    };
  }
  render() {
    return (
      <div className='quill-container'>
        <ReactQuill
          theme='snow'
          value={this.state.body}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default NoteEditor;
