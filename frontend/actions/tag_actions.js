import * as TagAPIUtil from '../util/tag_api_util';

export const RECEIVE_ALL_TAGS = 'RECEIVE_ALL_TAGS';
export const RECEIVE_TAG = 'RECEIVE_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';

const receiveAllTags = (tags) => ({
  type: RECEIVE_ALL_TAGS,
  tags,
});

const receiveSingularTag = (tag) => ({
  type: RECEIVE_TAG,
  tag,
});

const removeTag = (tagId) => ({
  type: REMOVE_TAG,
  tagId,
});

export const fetchTags = () => (dispatch) =>
  TagAPIUtil.fetchTags().then((tags) => dispatch(receiveAllTags(tags)));

export const fetchTag = (tagId) => (dispatch) =>
  TagAPIUtil.fetchTags(tagId).then((tag) => dispatch(receiveSingularTag(tag)));

export const createTag = (tag) => (dispatch) =>
  TagAPIUtil.createTag(tag).then((tag) => dispatch(receiveSingularTag(tag)));

export const updateTag = (tag) => (dispatch) =>
  TagAPIUtil.updateTag(tag).then((tag) => {
    debugger;
    dispatch(receiveSingularTag(tag));
    console.log(tag);
  });

export const deleteTag = (tagId) => (dispatch) =>
  TagAPIUtil.deleteTag(tagId).then(() => dispatch(removeTag(tagId)));
