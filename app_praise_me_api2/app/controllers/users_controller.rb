class UsersController < ApplicationController

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
        params.required(:user).permit(:name, :email, :password_digest)
    end
end