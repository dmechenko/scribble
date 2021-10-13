class CreateTags < ActiveRecord::Migration[6.1]
  def change
    create_table :tags do |t|
      t.string :title, null: false
      t.integer :note_id_array, array: true, default: []
      t.integer :user_id, null: false
      t.timestamps
    end
    add_column :notes, :tag_id, :integer
    add_index :tags, :title, unique: true
    add_index :tags, :note_id_array
  end
end
