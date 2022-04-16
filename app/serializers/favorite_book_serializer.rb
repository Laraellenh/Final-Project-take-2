class FavoriteBookSerializer < ActiveModel::Serializer
  attributes :id, :book_id, :user_id

  belongs_to :book
  belongs_to :user
end