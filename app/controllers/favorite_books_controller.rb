class FavoriteBooksController < ApplicationController
  wrap_parameters = []
    def create

        book= Book.find_by(title: params[:title])
    
        if !book
            newBook = Book.create!(title: params[:title], author_id: 1  )
           return render json: FavoriteBook.create(user_id: session[:user_id], book_id: newBook.id)
        end
        favebook = FavoriteBook.all.where({user_id: session[:user_id], book_id: book.id})
        if !favebook
            return render json: FavoriteBook.create(user_id: session[:user_id], book_id: book.id)
        end
            # render json: favebook[0]
            render json: favebook[0]
    end
    def show 
        render json: FavoriteBook.find_by(id: params[:id])
    end
    def index
       
        
       return render json: FavoriteBook.all.where(user_id: session[:user_id])
        
    end
    def destroy
        return render json: FavoriteBook.all.where(user_id: session[:user_id]).delete
    end

    private
    def fave_params
        params.permit(:book_id, :user_id, :book)
    end
    def only_title
        params.permit(:title)
    end
    def reject
        params.reject!(:covers, :key, :authors, :type, :description, :latest_revision, :revision, :created, :last_modified)
    end
    def book_params
        params.permit(:title, :author, :description)
    end
   

end
