import {
  RECEIVE_ALL_NOTES,
  RECEIVE_NOTE,
  REMOVE_NOTE,
} from '../actions/note_actions';

const notesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = { ...oldState };
  switch (action.type) {
    case RECEIVE_ALL_NOTES:
      return action.notes;
    case RECEIVE_NOTE:
      nextState[action.note.id] = action.note;
      return nextState;
    case REMOVE_NOTE:
      delete nextState[action.noteId];
      return nextState;
    default:
      return oldState;
  }
};

export default notesReducer;
