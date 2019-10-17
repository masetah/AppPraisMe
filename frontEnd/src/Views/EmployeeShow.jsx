import React, {Component} from 'react';
import Navigation from '../Components/Navigation';
import UpdateEmployee from '../Components/EditEmployeeModal';
import NewAppraisal from '../Components/NewAppraisal';
import AppraisalIndex from '../Components/AppraisalIndex';
import { Button } from 'reactstrap';

class EmployeeShow extends Component {
  constructor(){
    super()
    this.state={
      employee:[],
      appraisals:[]
    }
  }
 
  componentDidMount(){
    this.setState({
      employee:this.props.location.state.employee
    });
    this.getAppraisals();
}
getAppraisals = async () => {
  const appraisals =await fetch("http://localhost:3001/appraisals");
  const parsedResponse = await appraisals.json()
  this.setState({
      appraisals:parsedResponse.appraisals
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
    return (
        <div className="employeeShow">
          <Navigation/>
          <h1>{this.state.employee.name}</h1>
          <h3>{this.state.employee.position}</h3>
          <p>Hired: {this.state.employee.hire_date}</p>
          <AppraisalIndex appraisals={this.state.appraisals}/>
          <UpdateEmployee updateEmployee={this.updateEmployee} employee={this.props.location.state.employee}/>
          <Button color="danger" onClick={()=>{
            this.deleteEmployee(this.state.employee.id)
            }}>Terminate {this.state.employee.name}</Button>
          <NewAppraisal/>
        </div>
    );
  }
}

export default EmployeeShow;