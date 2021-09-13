import React from 'react';
import NotebookLis from './notebook_li';

class NotebookIndex extends React.Component {
  componentDidMount() {
    this.props.fetchNotebooks();
  }

  render() {
    return (
      <div className='notebooks-main'>
        <div className='notebook-index-count'>
          <p>Notebooks</p>
          <p>{this.props.notebooks.length} notebooks</p>
        </div>
        <ul className='notebook-index-container'>
          <NotebookLis notebooks={this.props.notebooks} />
        </ul>
      </div>
    );
  }
}

export default NotebookIndex;
