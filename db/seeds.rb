# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Notebook.delete_all
User.delete_all
Note.delete_all


demo_user = User.create!(email: 'pencil@scribble.com', password: 'scribblin')

notebook_seed1 = Notebook.create!(
  title: Faker::Music.album,
  author_id: demo_user.id
)
notebook_seed2 = Notebook.create!(
  title: Faker::Music.album,
  author_id: demo_user.id
)
notebook_seed3 = Notebook.create!(
  title: Faker::Music.album,
  author_id: demo_user.id
)

note_seed1 = Note.create!(
  title: Faker::Company.catch_phrase,
  body: Faker::TvShows::Seinfeld.quote,
  author_id: demo_user.id,
)
note_seed2 = Note.create!(
  title: Faker::Company.catch_phrase,
  body: Faker::TvShows::Seinfeld.quote,
  author_id: demo_user.id,
)
note_seed3 = Note.create!(
  title: Faker::Company.catch_phrase,
  body: Faker::TvShows::Seinfeld.quote,
  author_id: demo_user.id,
  notebook_id: notebook_seed1.id
)
note_seed4 = Note.create!(
  title: Faker::Company.catch_phrase,
  body: Faker::TvShows::Seinfeld.quote,
  author_id: demo_user.id,
  notebook_id: notebook_seed1.id
)
note_seed5 = Note.create!(
  title: Faker::Company.catch_phrase,
  body: Faker::TvShows::Seinfeld.quote,
  author_id: demo_user.id,
  notebook_id: notebook_seed2.id
)
note_seed6 = Note.create!(
  title: Faker::Company.catch_phrase,
  body: Faker::TvShows::Seinfeld.quote,
  author_id: demo_user.id,
  notebook_id: notebook_seed2.id
)
note_seed7 = Note.create!(
  title: Faker::Company.catch_phrase,
  body: Faker::TvShows::Seinfeld.quote,
  author_id: demo_user.id,
  notebook_id: notebook_seed2.id
)
note_seed8 = Note.create!(
  title: Faker::Company.catch_phrase,
  body: Faker::TvShows::Seinfeld.quote,
  author_id: demo_user.id,
  notebook_id: notebook_seed2.id
)
note_seed9 = Note.create!(
  title: Faker::Company.catch_phrase,
  body: Faker::TvShows::Seinfeld.quote,
  author_id: demo_user.id,
  notebook_id: notebook_seed3.id
)
note_seed10 = Note.create!(
  title: Faker::Company.catch_phrase,
  body: Faker::TvShows::Seinfeld.quote,
  author_id: demo_user.id,
  notebook_id: notebook_seed3.id
)
