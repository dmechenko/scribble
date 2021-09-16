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
    return (
      <div className='notebooks-main'>
        <div className='notebook-index-count'>
          <p className='notebook-index-header'>Notebooks</p>
        </div>
        <div className='notebook-index-header-2'>
          <p className='notebook-subheader'>
            {this.props.notebooks.length} notebooks
          </p>
          <Modal />
        </div>
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
        </ul>
      </div>
    );
  }
}

export default NotebookIndex;
