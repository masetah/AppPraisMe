import React, {Component} from 'react';
import Navigation from '../Components/Navigation';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import EmployeeIndex from '../Components/EmployeeIndex';
import NewEmployee from '../Components/NewEmployee';
import AppraisalIndex from '../Components/AppraisalIndex';
import NewAppraisal from '../Components/NewAppraisal';

class Dashboard extends Component {
  constructor(){
    super()
    this.state={
        employees:[],
        user:[],
        appraisals:[]
    }
}

// handleLogout=e=>{
//   e.preventDefault();
//   this.setUser(null);
//   this.props.history.push("/");
// }

componentDidMount(){
    this.getEmployees();
    this.getAppraisals();

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
updateAppraisalArray=(appraisal)=>{
    // console.log(employee, "from employee index line 18")
    this.setState(prevState=>{
        prevState.appraisals.push(appraisal)
        return{
            appraisals:prevState.appraisals
        }
    })
}
getAppraisals = async () => {
    const appraisals =await fetch("http://localhost:3001/appraisals");
    const parsedResponse = await appraisals.json()
    this.setState({
        appraisals:parsedResponse.appraisals
    })
  }
getEmployees = async () => {
    const employees =await fetch("http://localhost:3001/employees");
    const parsedResponse = await employees.json()
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

        <div className="dashboard">
            <Navigation/>
            <Sidebar/>
            <h1>User Dashboard </h1>
            <p>Keep track of your current employees, past appraisals and add new employees when you make a hire. Select one of your exisiting employees to view their profile page.</p>
            <NewEmployee updateEmployeeArray={this.updateEmployeeArray}/>
            <EmployeeIndex
                employees={this.state.employees}
                updateEmployeeArray={this.updateEmployeeArray}
                updateEmployee={this.updateEmployee}
                deleteEmployee={this.deleteEmployee}
            />
            <AppraisalIndex appraisals={this.state.appraisals}/>
            <NewAppraisal 
                updateAppraisalArray={this.updateAppraisalArray} 
                employees={this.state.employees}
            />
            <Footer/>
        </div>
    );
  }
}

export default Dashboard;