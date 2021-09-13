import React from 'react';
import NotebookIndexItem from './notebook_index_item';

class NotebookLis extends React.Component {
  render() {
    debugger;
    let notebookItem = Object.values(this.props.notebooks).map((notebook) => (
      <NotebookIndexItem notebook={notebook} key={notebook.id} />
    ));
    return <li>{notebookItem}</li>;
  }
}

export default NotebookLis;
