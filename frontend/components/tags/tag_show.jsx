import React, { Component } from 'react';
import { connect } from 'react-redux';

export class TagShow extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    const taggedNotes = this.props.tag.note_id_array.includes;
    return <div>test</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  // debugger;
  return {
    notes: Object.values(state.entities.notes),
    tag: Object.values(state.entities.tags).filter((tag) => {
      return tag.id === parseInt(ownProps.match.params.id);
    }),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchNotes: () => dispatch(fetchNotes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TagShow);
