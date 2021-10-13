export const fetchTags = () =>
  $.ajax({
    url: '/api/tags',
  });

export const fetchTag = (tagId) =>
  $.ajax({
    url: `/api/tags/${tagId}`,
  });

export const createTag = (tag) =>
  $.ajax({
    url: '/api/tags',
    method: 'post',
    data: { tag },
  });

export const updateTag = (tag) =>
  $.ajax({
    url: `/api/tags/${tag.id}`,
    method: 'patch',
    data: { tag },
  });

export const deleteTag = (tagId) =>
  $.ajax({
    url: `/api/tags/${tagId}`,
    method: 'delete',
  });
