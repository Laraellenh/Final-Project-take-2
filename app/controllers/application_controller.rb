class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorized_user
  # rescue_from ActiveRecord::RecordNotFound, with: :not_found
  rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity
# ?skip before action for fetch books?
  # def current_user
  #     User.find_by(id:session[:user_id])
  # end 

  private

  def unprocessable_entity(invalid)
      render json: {errors: invalid.record.errors}, status: :unprocessable_entity
  end 

  # def not_found(error)
  #     render json: {error: "#{error.model} Not Found"}, status: :not_found
  # end 
  def authorized_user
   
    render json: {errors: ["Not authorized"]},status: :unauthorized unless session.include? :user_id
  end
end
