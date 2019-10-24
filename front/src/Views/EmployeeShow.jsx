import React, {Component} from 'react';
import Navigation from '../Components/Navigation';
import UpdateEmployee from '../Components/EditEmployeeModal';
import Footer from '../Components/Footer';
import EmployeeNotes from '../Components/EmployeeNotes';
import { Button } from 'reactstrap';
import NewEmployeeNote from '../Components/NewEmployeeNote';

class EmployeeShow extends Component {
  constructor(){
    super()
    this.state={
      employee:[],
      notes:[],
    }
  }
 
  componentDidMount(){
    this.setState({
      employee:this.props.location.state.employee,
    });
    this.getNotes();
}
getNotes = async () => {
  const notes =await fetch("http://localhost:3001/notes");
  const parsedResponse = await notes.json()
  this.setState({
      notes:parsedResponse.notes
  })
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
    console.log(this.state)
    return (
        <div className="employee-show-container">
          <Navigation/>
          <div className="employee-show">
          <img src="./Public/Images/Employee-Placeholder-Image.jpg" alt="employee picture"/>
          <h1 className="employee-show-heading">{this.state.employee.name}</h1>
          <h3 className="employee-show-position">{this.state.employee.position}</h3>
          <p className="employee-show-hire-date">Hired: {this.state.employee.hire_date}</p>
          <UpdateEmployee updateEmployee={this.updateEmployee} employee={this.props.location.state.employee}/>
          <Button id="employeeTerminateButton" color= "danger" onClick={()=>{
            this.deleteEmployee(this.state.employee.id)
            }}>Terminate</Button>
            </div>
            <NewEmployeeNote/>
            <EmployeeNotes notes={this.state.notes}/>
          <Footer/>
        </div>
    );
  }
}

export default EmployeeShow;