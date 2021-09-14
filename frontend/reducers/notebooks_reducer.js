import {
  RECEIVE_ALL_NOTEBOOKS,
  RECEIVE_NOTEBOOK,
  REMOVE_NOTEBOOK,
} from '../actions/notebook_actions';

const notebooksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = { ...oldState };
  switch (action.type) {
    case RECEIVE_ALL_NOTEBOOKS:
      return action.notebooks;
    case RECEIVE_NOTEBOOK:
      nextState[action.notebook.id] = action.notebook;
    case REMOVE_NOTEBOOK:
      delete nextState[action.notebookId];
      return nextState;
    default:
      return oldState;
  }
};

export default notebooksReducer;
