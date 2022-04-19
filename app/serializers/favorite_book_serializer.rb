class FavoriteBookSerializer < ActiveModel::Serializer
  attributes :id, :book_id, :user_id, :note

  belongs_to :book
  belongs_to :user
end