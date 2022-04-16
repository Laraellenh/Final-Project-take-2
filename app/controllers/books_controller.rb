class BooksController < ApplicationController

    # require 'rest-client'
    # require 'json'
    # def index 
    #     render json: Book.all
    # end
    # def show
    #     Book.find_by(title: params[:title])
    # end

    def cats_cradle
        url = "https://openlibrary.org/works/OL98454W.json"
       
        response = JSON.parse(RestClient.get(url))
        render json: response
    end
    def welcome_to
        url = "https://openlibrary.org/works/OL19330726W.json"
        response = JSON.parse(RestClient.get(url))
        render json: response
    end
    def get_works
        url = "https://openlibrary.org/authors/OL20187A/works.json"
        response =  JSON.parse(RestClient.get(url))
        
        render json: response
    end
   

end     
