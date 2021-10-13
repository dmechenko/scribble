import {
  RECEIVE_ALL_TAGS,
  RECEIVE_TAG,
  REMOVE_TAG,
} from '../actions/tag_actions';

const tagsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = { ...oldState };
  switch (action.type) {
    case RECEIVE_ALL_TAGS:
      return action.tags;
    case RECEIVE_TAG:
      nextState[action.tag.id] = action.tag;
    case REMOVE_TAG:
      delete nextState[action.tagId];
      return nextState;
    default:
      return oldState;
  }
};

export default tagsReducer;
