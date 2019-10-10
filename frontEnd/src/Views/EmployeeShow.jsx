import React, {Component} from 'react';
import Navigation from '../Components/Navigation'
import UpdateEmployee from '../Components/EditEmployeeModal';
import { Button } from 'reactstrap';

class EmployeeShow extends Component {
  constructor(){
    super()
    this.state={
      employee:[]
    }
    
  }
 
  componentDidMount(){
    console.log(this.props.location.state.employee_id)
    console.log("COMPONENT IS MOUNTING")
    this.getEmployee();
}

getEmployee = async () => {
  // console.log();
  const employee =await fetch(`http://localhost:3001/employees/${this.props.location.state.employee_id}`);
  const parsedResponse = await employee.json()
  console.log(parsedResponse.employee);
  this.setState({
      employee:parsedResponse.employee
  })
}

updateEmployee = async (id, formData) => {
  const updatedEmployee = await fetch(`http://localhost:3001/employees/${this.props.location.state.employee_id}`, {
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
      const deleteEmployee = await fetch(`http://localhost:3001/employees/${this.props.location.state.employee_id}`, {
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
          <h1>{this.state.employee.name}</h1>
          <h3>{this.state.employee.position}</h3>
          <p>Hired: {this.state.employee.hire_date}</p>
          <UpdateEmployee updateEmployee={this.updateEmployee} employee={this.state.employee}/>
          <Button color="danger" onClick={()=>{
            this.deleteEmployee(this.state.employee.id)
            }}>Terminate</Button>

        </div>
    );
  }
}

export default EmployeeShow;