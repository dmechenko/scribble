import { combineReducers } from 'redux';
import notebooksReducer from './notebooks_reducer';
import notesReducer from './notes_reducer';
import tagsReducer from './tags_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  notes: notesReducer,
  notebooks: notebooksReducer,
  tags: tagsReducer,
});

export default entitiesReducer;
