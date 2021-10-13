import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import {
  createTag,
  deleteTag,
  fetchTag,
  fetchTags,
  updateTag,
} from '../../actions/tag_actions';
import TagIndex from './tag_index';

const mSTP = (state) => ({
  tags: Object.values(state.entities.tags),
  user: Object.values(state.entities.users),
});

const mDTP = (dispatch) => ({
  createTag: (tag) => dispatch(createTag(tag)),
  deleteTag: (tagId) => dispatch(deleteTag(tagId)),
  fetchTag: (tagId) => dispatch(fetchTag(tagId)),
  fetchTags: () => dispatch(fetchTags()),
  updateTag: (tag) => dispatch(updateTag(tag)),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mSTP, mDTP)(TagIndex);
