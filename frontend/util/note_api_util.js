export const fetchNotes = () =>
  $.ajax({
    url: 'api/notes',
  });

export const fetchNote = (noteId) =>
  $.ajax({
    url: `/api/notes/${noteId}`,
  });

export const createNote = (note) =>
  $.ajax({
    url: `/api/notes`,
    method: 'post',
    data: { note },
  });

export const updateNote = (note) =>
  $.ajax({
    url: `api/notes/${note.id}`,
    method: 'patch',
    data: { note },
  });

export const deleteNote = (noteId) =>
  $.ajax({
    url: `/api/posts/${noteId}`,
    method: 'delete',
  });
