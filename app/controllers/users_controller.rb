class UsersController < ApplicationController
    skip_before_action :authorized_user, only: [:create]


    def index
        render json: User.all
    end
    def create
    
        render json: User.create!(user_params), status: :created
    end
    def show
        user = User.find_by(id: session[:user_id])
  
        if user 
            render json: user, status: :ok
        else
            render json: "No current user", status: :unauthorized
        end
    end
  
    def update
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user, status: :ok
      
      end 
    def destroy
        User.find(params[:username]).delete
        head :no_content
    end
   
   
    private

    def user_params
        params.permit(:username, :email, :password)
    end 
end
