class CreateFavoriteBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :favorite_books do |t|
      t.references :user
      t.references :book 

      t.timestamps
    end
  end
end
