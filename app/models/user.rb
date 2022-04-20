class User < ApplicationRecord
    has_many :favorite_books
    has_many :books, through: :favorite_books
    
    has_many :authors, through: :books
    has_secure_password
    validates :username, presence: true
    validates :username, uniqueness: true
    validates :password, length: {minimum: 5, maximum: 10}
end
