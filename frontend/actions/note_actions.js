import * as NoteAPIUtil from '../util/note_api_util';

export const RECEIVE_ALL_NOTES = 'RECEIVE_ALL_NOTES';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';

const receiveAllNotes = (notes) => ({
  type: RECEIVE_ALL_NOTES,
  notes,
});

const receiveSingularNote = (note) => ({
  type: RECEIVE_NOTE,
  note,
});

const removeNote = (noteId) => ({
  type: REMOVE_NOTE,
  noteId,
});

export const fetchNotes = () => (dispatch) =>
  NoteAPIUtil.fetchNotes().then((notes) => dispatch(receiveAllNotes(notes)));

export const fetchNote = (noteId) => (dispatch) =>
  NoteAPIUtil.fetchNote(noteId).then((noteId) =>
    dispatch(receiveSingularNote(noteId))
  );

export const createNote = (note) => (dispatch) =>
  NoteAPIUtil.createNote(note).then((note) =>
    dispatch(receiveSingularNote(note))
  );

export const updateNote = (note) => (dispatch) =>
  NoteAPIUtil.updateNote(note).then((note) =>
    dispatch(receiveSingularNote(note))
  );

export const deleteNote = (noteId) => (dispatch) =>
  NoteAPIUtil.deleteNote(noteId).then(() => dispatch(removeNote(noteId)));
