import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SideNavContainer from '../navbar/sidenav_container';
import NotebookIndexContainer from '../notebooks/notebook_index_container';
import NoteIndexContainer from '../notes/note_index_container';
import NoteSide from '../notes/note_side';
import NoteEditorContainer from '../note_editor/note_editor_container';

class Main extends React.Component {
  render() {
    return (
      <div className='notes-main'>
        <Route component={SideNavContainer}></Route>
        <Route path='/notes/' component={NoteIndexContainer}></Route>
        <Route exact path='/notes/' component={NoteSide}></Route>
        <Route path='/notes/:noteId' component={NoteEditorContainer}></Route>
        <Route
          exact
          path='/notebooks'
          component={NotebookIndexContainer}
        ></Route>
        <Route
          path='/notebooks/:notebookId/notes'
          component={NoteIndexContainer}
        ></Route>
        <Route
          path='/notebooks/:notebookId/notes/:noteId'
          component={NoteEditorContainer}
        ></Route>
      </div>
    );
  }
}

export default Main;
