import React from 'react';
import NotebookLis from './notebook_li';
import Modal from '../modal/modal';
class NotebookIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { notebooks: this.props.notebooks };
  }
  componentDidMount() {
    this.props.fetchNotebooks();
  }

  componentDidUpdate(prevProps) {
    if (this.props.notebooks !== prevProps.notebooks)
      this.setState(this.props.notebooks);
  }

  render() {
    // debugger;
    return (
      <div className='notebooks-main'>
        <div className='notebook-index-count'>
          <p>Notebooks</p>
          <p>{this.props.notebooks.length} notebooks</p>
        </div>
        <Modal />
        <ul className='notebook-index-container'>
          <NotebookLis
            notebooks={this.props.notebooks}
            user={this.props.user[0]}
            fetchNotebook={this.props.fetchNotebook}
            createNotebook={this.props.createNotebook}
            deleteNotebook={this.props.deleteNotebook}
            updateNotebook={this.props.updateNotebook}
            openModal={this.props.openModal}
          />
          <li>test</li>
        </ul>
      </div>
    );
  }
}

export default NotebookIndex;
