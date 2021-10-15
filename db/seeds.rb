# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Tag.delete_all
Notebook.delete_all
User.delete_all
Note.delete_all


demo_user = User.create!(email: 'pencil@scribble.com', password: 'scribblin')



notebook_seed1 = Notebook.create!(
  title: 'My First Notebook',
  author_id: demo_user.id
)
notebook_seed2 = Notebook.create!(
  title: 'Grocery List',
  author_id: demo_user.id
)
notebook_seed3 = Notebook.create!(
  title: 'To-do for the Week',
  author_id: demo_user.id
)

note_seed1 = Note.create!(
  title: Faker::GreekPhilosophers.quote,
  body: Faker::Quote.matz,
  author_id: demo_user.id,
)
note_seed2 = Note.create!(
  title: Faker::GreekPhilosophers.quote,
  body: Faker::Quote.matz,
  author_id: demo_user.id,
)
note_seed3 = Note.create!(
  title: Faker::GreekPhilosophers.quote,
  body: Faker::Quote.matz,
  author_id: demo_user.id,
  notebook_id: notebook_seed1.id
)
note_seed4 = Note.create!(
  title: Faker::GreekPhilosophers.quote,
  body: Faker::Quote.yoda,
  author_id: demo_user.id,
  notebook_id: notebook_seed1.id
)
note_seed5 = Note.create!(
  title: Faker::GreekPhilosophers.quote,
  body: Faker::Quote.yoda,
  author_id: demo_user.id,
  notebook_id: notebook_seed2.id
)
note_seed6 = Note.create!(
  title: Faker::GreekPhilosophers.quote,
  body: Faker::Quote.yoda,
  author_id: demo_user.id,
  notebook_id: notebook_seed2.id
)
note_seed7 = Note.create!(
  title: Faker::GreekPhilosophers.quote,
  body: Faker::Quote.yoda,
  author_id: demo_user.id,
  notebook_id: notebook_seed2.id
)
note_seed8 = Note.create!(
  title: Faker::GreekPhilosophers.quote,
  body: Faker::Quote.most_interesting_man_in_the_world,
  author_id: demo_user.id,
  notebook_id: notebook_seed2.id
)
note_seed9 = Note.create!(
  title: Faker::GreekPhilosophers.quote,
  body: Faker::Quote.most_interesting_man_in_the_world,
  author_id: demo_user.id,
  notebook_id: notebook_seed3.id
)
note_seed10 = Note.create!(
  title: Faker::GreekPhilosophers.quote,
  body: Faker::Quote.most_interesting_man_in_the_world,
  author_id: demo_user.id,
  notebook_id: notebook_seed3.id
)

tag_seed1 = Tag.create!(
  title: 'First',
  user_id: demo_user.id,
  note_id_array: [note_seed1.id, note_seed2.id]
)

tag_seed2 = Tag.create!(
  title: 'Second',
  user_id: demo_user.id,
  note_id_array: [note_seed3.id, note_seed4.id]
)

tag_seed3 = Tag.create!(
  title: 'Third',
  user_id: demo_user.id,
  note_id_array: [note_seed5.id, note_seed6.id]
)
