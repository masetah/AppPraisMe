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
            <div className="newEmployee">
                <h3>Add a New Employee</h3>
                <form onSubmit={this.handleSubmit}>
                    <Label id="Label" for="name">Name: </Label>
                    <input type="text" placeholder="John Snow" name="name" onChange={this.handleChange}></input>
                    <br></br>
                    <Label id="Label" for="position">Position: </Label>
                    <input type="text" placeholder="King of the North" name="position" onChange={this.handleChange}></input>
                    <br></br>
                    <Label id="Label" for="hire_date">Hire date: </Label>
                    <input type="date" name="hire_date" onChange={this.handleChange}></input>
                    <br></br>
                    <Button type="submit" color="warning" > Submit </Button>
                </form>
            </div>
        )
    }
}

export default NewEmployee;