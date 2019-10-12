class AuthController < ApplicationController

    def login
        user = User.find_by(username: params[:username])
        if(user && user.authenticate(params[:password]))
            render json: {user: user}
        else
            render json: {errors: "invalid username"}
        end
    end

    def create
        user = User.new(user_params)
        if user.save
            render(status: 201, json: { user: user })
        else
            render(status: 422, json: { user: user })    
        end
    end

    private
    def user_params
        params.required(:user).permit(:username, :password)
    end
end

