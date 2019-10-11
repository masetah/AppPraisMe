import React, {Component} from 'react';
import Navigation from '../Components/Navigation';
import EmployeeIndex from '../Components/EmployeeIndex';


class Dashboard extends Component {
  constructor(){
    super()
    this.state={
        employees:[],
    }
}

handleLogout=e=>{
  e.preventDefault();
  this.setUser(null);
  this.props.history.push("/");
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
    return (
        <div>
          <Navigation/>
          <h1>Welcome to your Dashboard </h1>
          <EmployeeIndex
                    employees={this.state.employees}
                    updateEmpoyeeArray={this.updateEmployeeArray}
                    updateEmployee={this.updateEmployee}
                    deleteEmployee={this.deleteEmployee}
          />
        </div>
    );
  }
}

export default Dashboard;