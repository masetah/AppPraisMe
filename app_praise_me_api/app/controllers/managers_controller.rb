class ManagersController < ApplicationController
    def index
        managers = Manager.all
        render json: {status: 200, managers: manager}
    end
    def show
        manager = Manager.find(params[:id])
        render json: {status: 200, manager: manager}
    end
    def create
        manager = Manager.new(manager_params)
        if manager.save
            render(status: 201, json: { manager: manager })
        else
            render(status: 422, json: { manager: manager })    
        end
    end
    def update
        manager = Manager.find(params[:id])
        manager.update(manager_params)
        render(json: {manager: manager})
    end
    private
    def manager_params
        params.required(:employee).permit(:name, :email, :password)
    end
end