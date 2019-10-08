import React, {Component} from 'react';
import UpdateEmployee from '../Components/EditEmployeeModal';
import { Button } from 'reactstrap';

class EmployeeIndex extends Component {
    constructor(){
        super()
        this.state={
            employees:[],
        }
    }

    componentDidMount(){
        this.getEmployees();
    }

    getEmployees = async () => {
        const employees =await fetch("http://localhost:3001/employees");
        const parsedResponse = await employees.json()
        console.log(parsedResponse.employees);
        this.setState({
            employees:parsedResponse.employees
        })
    }

    updateEmployee = async (id, formData) => {
        const updatedEmployee = await fetch(`http://localhost:3001/employees/${id}`, {
            method: "PUT",
            // credentials: "include",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const parsedResponse = await updatedEmployee.json();
        this.setState({
            employees: this.state.employees.map((employee)=>{
                if(id===employee._id){
                    return parsedResponse.data
                }else{
                    return employee
                }
            })
        })
        console.log(parsedResponse)
    }

    deleteEmployee = async (id) => {
        console.log(id);
        try{
            const deleteEmployee = await fetch(`http://localhost:3001/employees/${id}`, {
            method:'DELETE',
            // credentials: "include",
        });
        const parsedResponse = await deleteEmployee.json();
        if(parsedResponse.status.code===204){
            this.setState({
                employees: this.state.eemployees.filter((employee,i) =>employee._id !==id)
            });
        }
    }catch(err){
        console.log(err)
        }
    }

    render(){
        const employees = this.state.employees.map((employee)=>{
            return <div key={employee.id}>
                <Button color="link">{employee.name} ({employee.position}) </Button>
                <UpdateEmployee updateEmployee={this.updateEmployee} employee={employee}/>
                <Button color="danger" onClick={()=>{
                    this.deleteEmployee(employee.id)
                }}>Terminate</Button>
            </div>
        })
        return(
            <div>
                <h2>Employees</h2>
                {employees}
            </div>
        )
    }
}

export default EmployeeIndex;