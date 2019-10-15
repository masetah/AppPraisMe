class EmployeesController < ApplicationController
    def index
        employees = Employee.all
        render json: {status: 200, employees: employees}
    end
    def show
        employee = Employee.find(params[:id])
        render json: {status: 200, employee: employee}
    end
    def create
        employee = Employee.new(employee_params)
        if employee.save
            render(status: 201, json: { employee: employee })
        else
            render(status: 422, json: { employee: employee })    
        end
    end
    def update
        employee = Employee.find(params[:id])
        employee.update(employee_params)
        render(json: {employee: employee})
    end
    def destroy
        empoyee = Employee.destroy(params[:id])
        render(status: 204)
    end
    private
    def employee_params
        params.required(:employee).permit(:name, :position, :hire_date)
    end
end