import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNotes } from '../../actions/note_actions';
import { fetchTag } from '../../actions/tag_actions';

export class TagShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tag: this.props.tag,
    };
  }

  componentDidMount() {
    this.props.fetchNotes();
    // this.props.fetchTag(this.props.tag.id);
  }

  renderTaggedNotes() {
    const taggedNotes = this.props.notes.filter((note) => {
      return this.props.tag.note_id_array.includes(note.id);
    });
    return (
      <div>
        {/* <h1>{this.props.tag[0].title}</h1> */}
        <ul className='tagged-note-item-container'>
          {taggedNotes.map((note, i) => (
            <Link className='tagged-note' to={`/notes/${note.id}`}>
              <li key={note.id}>{note.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }

  // renderTitle() {
  //   const title = this.props.tag[0].title;
  //   return <div>{title}</div>;
  // }

  render() {
    // const taggedNotes = this.props.notes.filter((note) => {
    //   return this.props.tag[0].note_id_array.includes(note.id);
    // });
    // const taggedNoteItem = taggedNotes.map((note, i) => (

    // ))
    // debugger;
    console.log(this.props.tag);
    return (
      <div className='tagged-notes-container'>
        <div className='tag-title'>test</div>
        {this.renderTaggedNotes()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // debugger;
  return {
    notes: Object.values(state.entities.notes),
    tag: Object.values(state.entities.tags).find((tag) => {
      return tag.id === parseInt(ownProps.match.params.id);
    }),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchNotes: () => dispatch(fetchNotes()),
  fetchTag: (tagId) => dispatch(fetchTag(tagId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TagShow);
