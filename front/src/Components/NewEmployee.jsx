import React, {Component} from 'react';
import Label from 'reactstrap/lib/Label';
import {Button} from 'reactstrap';

class NewEmployee extends Component {
    constructor(){
        super()
        this.state={
            name:"",
            postion:"",
            hire_date:"",
            manager_id: 1
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.currentTarget.name] : e.currentTarget.value
        })
    }
    createEmployee = async (currentState) => {
        const createEmployee = await fetch("http://localhost:3001/employees",{
          method: "POST",
          body:JSON.stringify(currentState),
          headers: {
            "Content-Type": "application/json"
          }
        })
        const parsedResponse = await createEmployee.json();
        console.log(parsedResponse);
        this.props.updateEmployeeArray(parsedResponse.employee);
    }
    handleSubmit= (e) => {
        e.preventDefault();
        this.createEmployee(this.state)
    }
    render(){
        return(
            <div className="new-employee-component">
                    <h3 className="form-new-employee-heading">Add a New Employee</h3>
                    <form className="form-new-employee" onSubmit={this.handleSubmit}>
                    <Label className="Label" for="name" >Employee Name </Label>
                    <input className="form-control" type="text" placeholder="Tyrian Lanaster" name="name" autoComplete="off"  onChange={this.handleChange}></input>
                    <Label className="Label" for="position">Employee's Position</Label>
                    <input className="form-control" type="text" placeholder="King Slayer" name="position" autoComplete="off"  onChange={this.handleChange}></input>
                    <Label className="Label" for="hire_date">Hire date </Label>
                    <input className="form-control" type="date" name="hire_date" onChange={this.handleChange}></input>
                    <Button type="submit" color="primary" > Submit </Button>
                </form>

            </div>
        )
    }
}

export default NewEmployee;