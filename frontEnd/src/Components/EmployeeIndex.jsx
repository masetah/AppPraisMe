import React, {Component} from 'react';
import UpdateEmployee from '../Components/EditEmployeeModal';
import NewEmployee from './NewEmployee';
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
    updateEmployeeArray=(employee)=>{
        console.log(employee, "from employee index line 18")
        this.setState(prevState=>{
            prevState.employees.push(employee)
            return{
                employees:prevState.employees
            }
        })
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
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const parsedResponse = await updatedEmployee.json();
        this.setState(prevState=>{
            const filterEmployeeArray = prevState.employees.filter(element=>element.id!==id)
            const updatedEmployee = parsedResponse.employee
            return{
                employees:[...filterEmployeeArray, updatedEmployee]
            }
        })
        console.log(parsedResponse)
    }

    deleteEmployee = async (id) => {
        console.log(id);
        try{
            const deleteEmployee = await fetch(`http://localhost:3001/employees/${id}`, {
            method:'DELETE',
        });
        console.log(deleteEmployee)
        const parsedResponse = await deleteEmployee
        console.log(parsedResponse, "Line 62")
        if(parsedResponse.status===204){
            this.setState({
                employees: this.state.employees.filter((employee) => employee.id !==id)
            });
        }
    }catch(err){
        console.log(err)
        }
    }

    render(){
        console.log(this.state.employees)
        // if(this.state.employees.length!=0){
            const employees = this.state.employees.map((employee, index)=>{
                if(employee){
                    return <div key={index}>
                    <Button color="link">{employee.name} ({employee.position}) </Button>
                    <UpdateEmployee updateEmployee={this.updateEmployee} employee={employee}/>
                    <Button color="danger" onClick={()=>{
                        this.deleteEmployee(employee.id)
                    }}>Terminate</Button>
                </div>
                }
                console.log(employee)
        
            })
            return(
                <div>
                    <NewEmployee updateEmployeeArray={this.updateEmployeeArray}/>
                    <h2>Employees</h2>
                    {employees}
                </div>
            )
        // }else{return null}
    }

}

export default EmployeeIndex;