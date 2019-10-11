import React, {Component} from 'react';
import Navigation from '../Components/Navigation'
import UpdateEmployee from '../Components/EditEmployeeModal';
import { Button } from 'reactstrap';
// import { history } from 'react-router-dom'

class EmployeeShow extends Component {
  constructor(){
    super()
    this.state={
      employee:[],
    }
  }
 
  componentDidMount(){
    // console.log(this.props.location.state.employee.id)
    this.setState({
      employee:this.props.location.state.employee
    })
    // console.log("COMPONENT IS MOUNTING")
    // this.getEmployee();
}

// getEmployee = async () => {
//   // console.log();
//   const employee =await fetch(`http://localhost:3001/employees/${this.props.location.state.employee_id}`);
//   const parsedResponse = await employee.json()
//   console.log(parsedResponse.employee);
//   this.setState({
//       employee:parsedResponse.employee
//   })
// }

updateEmployee = async (formData) => {
  try{
    console.log(this.state.employee.id)
    await fetch(`http://localhost:3001/employees/${this.state.employee.id}`, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
          "Content-Type": "application/json"
      }
  })
  // this.setState(formData={
  //   employee:this.props.location.state.employee
  // })
  // const parsedResponse = await updatedEmployee.json();
  // this.setState(prevState=>{
  //     const filterEmployeeArray = prevState.employees.filter(element=>element.id!==id)
  //     const updatedEmployee = parsedResponse.employee
  //     return{
  //         employees:[...filterEmployeeArray, updatedEmployee]
  //     }
  // })
  // console.log(parsedResponse)
  }catch(err){
    console.log(err)
  }
}

//add a warning that this cannot be undone.
deleteEmployee = async (id) => {
  console.log(id);
  try{
      await fetch(`http://localhost:3001/employees/${id}`, {
      method:'DELETE',
      headers: {
        "Content-Type": "application/json"
    }
  });
  this.props.history.push("/dashboard/1")
  
  }catch(err){
    console.log(err)
  }
}
  render(){
    console.log(this.state.employee)
    return (
        <div>
          <Navigation/>
          <h1>{this.state.employee.name}</h1>
          <h3>{this.state.employee.position}</h3>
          <p>Hired: {this.state.employee.hire_date}</p>
          <UpdateEmployee updateEmployee={this.updateEmployee} employee={this.props.location.state.employee}/>
          <Button color="danger" onClick={()=>{
            this.deleteEmployee(this.state.employee.id)
            }}>Terminate</Button>

        </div>
    );
  }
}

export default EmployeeShow;