import React, {Component} from 'react';
import Navigation from '../Components/Navigation';
import UpdateEmployee from '../Components/EditEmployeeModal';
import Footer from '../Components/Footer';
import EmployeeNotes from '../Components/EmployeeNotes';
import { Button } from 'reactstrap';

class EmployeeShow extends Component {
  constructor(){
    super()
    this.state={
      employee:[],
    }
  }
 
  componentDidMount(){
    this.setState({
      employee:this.props.location.state.employee
    });
}

updateEmployee = async (formData) => {
  try{
    console.log(formData)
    await fetch(`http://localhost:3001/employees/${this.state.employee.id}`, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
          "Content-Type": "application/json"
      }
  })
  this.setState({
    employee: formData
  })
  }catch(err){
    console.log(err)
  }
}

//add a warning that this cannot be undone.
deleteEmployee = async (id) => {
  console.log(this.props.history);
  try{
      await fetch(`http://localhost:3001/employees/${id}`, {
      method:'DELETE',
      headers: {
        "Content-Type": "application/json"
    }
  });
  this.props.history.push("/dashboard")
  }catch(err){
    console.log(err)
  }
}
  render(){
    return (
        <div className="employee-show-container">
          <Navigation/>
          <div className="employee-show">
          <h1 className="employee-show-heading">{this.state.employee.name}</h1>
          <h3 className="employee-show-position">{this.state.employee.position}</h3>
          <p className="employee-show-hire-date">Hired: {this.state.employee.hire_date}</p>
          <UpdateEmployee updateEmployee={this.updateEmployee} employee={this.props.location.state.employee}/>
          <Button id="employeeTerminateButton" color= "danger" onClick={()=>{
            this.deleteEmployee(this.state.employee.id)
            }}>Terminate</Button>
            </div>
            <EmployeeNotes/>
          <Footer/>
        </div>
    );
  }
}

export default EmployeeShow;