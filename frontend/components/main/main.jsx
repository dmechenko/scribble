import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SideNavContainer from '../navbar/sidenav_container';
import NoteEditorContainer from '../note_editor/note_editor_container';

class Main extends React.Component {
  render() {
    return (
      <div className='notes-main'>
        <Route component={SideNavContainer}></Route>
        <Route path='/notes' component={NoteEditorContainer}></Route>
      </div>
    );
  }
}

// const Main = () => (
//   <div className='notes-main'>
//     <Route component={SideNavContainer}></Route>
//     <Route path='/notes' component={NoteEditorContainer}></Route>
//   </div>
// );

export default Main;
