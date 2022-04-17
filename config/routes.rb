Rails.application.routes.draw do
  
  resources :users
  resources :favorite_books, only: [:create, :show, :index]
  resources :authors
  # resources :books, only: [:index, :get_works]
  post "/login", to: "sessions#login"
  get '/me', to: "users#show"
  delete '/logout', to: 'sessions#destroy'
  post "/signup", to: "users#create"
  get '/books', to: "books#get_works"
  # get '/books', to: "books#index"
  # get '/books', to: "books#show"
  # get "/home", to:
  # get '/cats', to: "books#cats_cradle"
  # get '/welcome', to: "books#welcome_to"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
