export const fetchNotebooks = () =>
  $.ajax({
    url: 'api/notebooks',
  });

export const fetchNotebook = (notebookId) =>
  $.ajax({
    url: `/api/notebooks/${notebookId}`,
  });

export const createNotebook = (notebook) =>
  $.ajax({
    url: 'api/notebooks',
    method: 'post',
    data: { notebook },
  });

export const updateNotebook = (notebook) =>
  $.ajax({
    url: `/api/notebooks/${notebook.id}`,
    method: 'patch',
    data: { notebook },
  });

export const deleteNotebook = (notebookId) =>
  $.ajax({
    url: `/api/notebooks/${notebookId}`,
    method: 'delete',
  });
