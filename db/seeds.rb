# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Note.delete_all
Notebook.delete_all

demo_user = User.create!(email: 'pencil@scribble.com', password: 'scribblin')

note_seed1 = Note.create!(
  title: Faker::Company.catch_phrase,
  body: Faker::TvShows::Seinfeld.quote,
  author_id: demo_user.id
)
note_seed2 = Note.create!(
  title: Faker::Company.catch_phrase,
  body: Faker::TvShows::Seinfeld.quote,
  author_id: demo_user.id
)
note_seed3 = Note.create!(
  title: Faker::Company.catch_phrase,
  body: Faker::TvShows::Seinfeld.quote,
  author_id: demo_user.id
)
note_seed4 = Note.create!(
  title: Faker::Company.catch_phrase,
  body: Faker::TvShows::Seinfeld.quote,
  author_id: demo_user.id
)
note_seed5 = Note.create!(
  title: Faker::Company.catch_phrase,
  body: Faker::TvShows::Seinfeld.quote,
  author_id: demo_user.id
)

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