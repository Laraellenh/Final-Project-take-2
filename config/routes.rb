Rails.application.routes.draw do
  
  resources :users
  resources :favorite_books, only: [:create, :show, :index, :update]


  post "/login", to: "sessions#login"
  get '/me', to: "users#show"
  delete '/logout', to: 'sessions#destroy'
  post "/signup", to: "users#create"
  get '/books', to: "books#get_works"
  

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
