class SessionsController < ApplicationController

    def create 
        user = User.find_by(email: params[:email])
        # if (user && password: params[password])
            render json: {user:user}
        # else 
        #     render json: {errors: "invalid username"}
        # end
    end
end