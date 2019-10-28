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
    this.getNotes();
    this.setState({
      employee:this.props.location.state.employee,
    });
    
}
getNotes = async () => {
  const notes = await fetch("http://localhost:3001/notes");
  const parsedResponse = await notes.json();
    this.setState({
      notes:parsedResponse.notes
  })
  console.log(this.state.notes)
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
deleteNote = async (id) => {
  console.log(this.props.history);

//   try{
//       await fetch(`http://localhost:3001/employees/${id}`, {
//       method:'DELETE',
//       headers: {
//         "Content-Type": "application/json"
//     }
//   });
//   this.props.history.push("/dashboard")
//   }catch(err){
//     console.log(err)
//   }
}
updateNotesArray=(note)=>{
  console.log(note, "line 65 EmployeeShow")
  this.setState(prevState=>{
      prevState.notes.push(note)
      return{
          notes:prevState.notes
      }
  })
}
  render(){
    console.log(this.state.notes)
    return (
        <div className="employee-show-container">
          <Navigation/>
          <div className="employee-show">
            <img src="./public/Images/Employee-Placeholder-Image.jpg" alt="employee"/>
            <h1>{this.state.employee.name}</h1>
            <h3 >{this.state.employee.position}</h3>
            <p >Hired: {this.state.employee.hire_date}</p>
          <UpdateEmployee updateEmployee={this.updateEmployee} employee={this.props.location.state.employee}/>
          <Button id="employeeTerminateButton" color= "danger" onClick={()=>{
            this.deleteEmployee(this.state.employee.id)
            }}>Terminate</Button>
            <EmployeeNotes employee={this.props.location.state.employee} notes={this.state.notes}/>
            </div>
            <NewEmployeeNote employee={this.props.location.state.employee} updateNotesArray={this.updateNotesArray}/>
          <Footer/>
        </div>
    );
  }
}

export default EmployeeShow;