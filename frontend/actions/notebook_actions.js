import * as NotebookAPIUtil from '../util/notebook_api_util';

export const RECEIVE_ALL_NOTEBOOKS = 'RECEIVE_ALL_NOTEBOOKS';
export const RECEIVE_NOTEBOOK = 'RECEIVE_NOTEBOOK';
export const REMOVE_NOTEBOOK = 'REMOVE_NOTEBOOK';

const receiveAllNotebooks = (notebooks) => ({
  type: RECEIVE_ALL_NOTEBOOKS,
  notebooks,
});

const receiveSingularNotebook = (notebook) => ({
  type: RECEIVE_NOTEBOOK,
  notebook,
});

const removeNotebook = (notebookId) => ({
  type: REMOVE_NOTEBOOK,
  notebookId,
});

export const fetchNotebooks = () => (dispatch) =>
  NotebookAPIUtil.fetchNotebooks().then((notebooks) =>
    dispatch(receiveAllNotebooks(notebooks))
  );

export const fetchNotebook = (notebookId) => (dispatch) =>
  NotebookAPIUtil.fetchNotebook(notebookId).then((notebook) =>
    dispatch(receiveSingularNotebook(notebook))
  );

export const createNotebook = (notebook) => (dispatch) =>
  NotebookAPIUtil.createNotebook(notebook).then((notebook) =>
    dispatch(receiveSingularNotebook(notebook))
  );

export const updateNotebook = (notebook) => (dispatch) =>
  NotebookAPIUtil.updateNotebook(notebook).then((notebook) =>
    dispatch(receiveSingularNotebook(notebook))
  );

export const deleteNotebook = (notebookId) => (dispatch) =>
  NotebookAPIUtil.deleteNotebook(notebookId).then(() =>
    dispatch(removeNotebook(notebookId))
  );
