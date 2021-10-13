import React from 'react';
import Modal from '../modal/modal';
import TagLis from './tag_li';

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
    return <div></div>;
  }
}

export default TagIndex;
