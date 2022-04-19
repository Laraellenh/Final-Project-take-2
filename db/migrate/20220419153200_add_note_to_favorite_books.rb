class AddNoteToFavoriteBooks < ActiveRecord::Migration[6.1]
  def change
    add_column :favorite_books, :note, :string
  end
end
