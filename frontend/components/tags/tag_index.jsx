import React from 'react';
import Modal from '../modal/modal';
import TagLis from './tag_li';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { faTag } from '@fortawesome/free-solid-svg-icons';

class TagIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: this.props.tags,
    };
  }

  componentDidMount() {
    this.props.fetchTags();
  }

  render() {
    const modalDisplay = (
      <div className='notebook-edit-btn-container'>
        <button
          className='notebook-edit-btn'
          onClick={() => this.props.openModal('edit-notebook')}
        >
          Add Tag
        </button>
      </div>
    );
    return (
      <div className='tag-main'>
        <Modal />
        <div className='tag-header'>
          <div className='tag-icon'>
            <FontAwesomeIcon icon={faTag} />
          </div>
          <p>Tags</p>
        </div>
        <ul className='tag-index-container'>
          <TagLis
            tags={this.props.tags}
            openModal={this.props.openModal}
            user={this.props.user}
            openModal={this.props.openModal}
            fetchTag={this.props.fetchTag}
            createTag={this.props.createTag}
            deleteTag={this.props.deleteTag}
            updateTag={this.props.updateTag}
          />
        </ul>
      </div>
    );
  }
}

export default TagIndex;
