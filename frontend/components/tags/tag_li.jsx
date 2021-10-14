import React from 'react';
import TagIndexItem from './tag_index_item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

class TagLis extends React.Component {
  handleCreate() {
    let tag = {
      title: 'New Tag',
    };
    this.props.createTag(tag);
  }

  render() {
    let tagItem = Object.values(this.props.tags).map((tag) => (
      <TagIndexItem
        tag={tag}
        key={tag.id}
        user={this.props.user}
        openModal={this.props.openModal}
        fetchTag={this.props.fetchTag}
        createTag={this.props.createTag}
        deleteTag={this.props.deleteTag}
        updateTag={this.props.updateTag}
      />
    ));
    return (
      <div className='tag-item-main'>
        <button
          onClick={() => this.props.openModal('create-tag')}
          className='tag-add-btn'
        >
          <FontAwesomeIcon className='plus-icon' icon={faPlusSquare} /> Add Tag
        </button>
        <li>{tagItem}</li>
      </div>
    );
  }
}

export default TagLis;
