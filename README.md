# scribble

## Check it out live:

[scribble](https://scr-bble.herokuapp.com/#/)

## Overview

### Jot down your thoughts with ease.

- Scribble is based on the popular note-taking app, [Evernote](http://evernote.com). It takes inspiration from the site's styling and functionality, but with a few creative liberties. Upon logging in or creating an account, users are greeted with an easy-to-navigate interface and are able to get started immediately. The user can categorize their notes into specific notebooks (or not!) to separate their concerns. Create as many notes or notebooks as you want! Additionally, with the aid of React-Quill, a user's notes don't have to be boring. Add a splash of color, document your memories by adding images, or make a comprehensive study guide for school with embedded videos.

## Features

### User Authentication

- Create an account, or use an existing one to sign in.
- A demo user is also available for those that just want to browse the site's functionality.

![Desktop 2021 09 17 - 10 48 37 26_Trim](https://user-images.githubusercontent.com/85643458/133842517-05280ffe-0715-411d-a468-d1208af64b49.gif)

### Creation and Manipulation of Notes

- Jump right in and add a note. Add a splash of color or some embedded content.
- Move it around to a different notebook, or change the title.

### The necessity of diverting a path lead to the implementation of a fun condition - this way, when a user clicks on a note, they're lead to the correct url.

```jsx
const NoteIndexItem = (props) => {
  if (!props.note) return null;

  let notebookPath = props.match.params.notebookId;
  let path;
  if (notebookPath) {
    path = `/notebooks/${notebookPath}/notes/${props.note.id}`;
  } else {
    path = `/notes/${props.note.id}`;
  }
  return (
    <Link to={`${path}`}>
      <div className='note-index-item-container'>
        <div className='note-index-item'>
          <div className='title'>{props.note.title}</div>
          <div className='body'>{parse(props.note.body)}</div>
          <div className='note-updated'>{cleanDate(props.note.updated_at)}</div>
        </div>
      </div>
    </Link>
  );
};
```

### Organization by Notebooks

- Create a notebook to house your recipes, finances, or project ideas!

## Technologies

### Major Technologies

- React: a free and open-source front-end JavaScript library for building user interfaces or UI components.
- React-Router: a standard library that allows routing in React. It enables navigation between various components, changes in the browser URL, and keeps the user interface in sync with the URL.
- Redux: an open-source JavaScript library for managing and centralizing application state.
- Ruby on Rails: an application framework that provides a default structure for a database, allowing backend and frontend to communicate.
- PostgreSQL: an open source object-relational database system.

### Additional Technologies

- React-Quill: a free and open source API driven Rich Text Editor.
- React-HTML-Parser: a utility for converting HTML strings into React components.
- FontAwesome: a diverse library of icons.
- Debounce: limits the rate at which a function gets invoked.

## Installation Instructions

1. Clone the repo on your machine.
2. Delete the gemfile and package-json lock files if necessary.
3. Run the following commands:
   - Make sure to have PostgreSQL running. [Documentation](https://www.postgresql.org/docs/9.3/tutorial-install.html)
   - `npm install`
   - `bundle install`
   - `bundle exec rails db:create`
   - `bundle exec rails db:setup`
   - `npm run start`
   - in a new terminal, run `rails s`
