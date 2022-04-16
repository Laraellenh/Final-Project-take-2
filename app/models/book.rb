class Book < ApplicationRecord
    belongs_to :author 
    has_many :favorite_books
    has_many :users, through: :favorite_books
   
end
