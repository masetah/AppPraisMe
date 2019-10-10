import React, {Component} from 'react';
import NewEmployee from './NewEmployee';
import {Link} from 'react-router-dom'

class EmployeeIndex extends Component {
    constructor(){
        super()
        this.state={
            employees:[]
        }
    }

    updateEmployeeArray=(employee)=>{
        console.log(employee, "from employee index line 14")
        this.setState(prevState=>{
            prevState.employees.push(employee)
            return{
                employees:prevState.employees
            }
        })
    }

    render(){
        console.log(this.props.employees)
            const employees = this.props.employees.map((employee, index)=>{
                return <div key={index}>
                    <Link to={{pathname:`/employee/${employee.id}`,
                        state:{
                            employee_id: employee.id 
                        }
                    }}>{employee.name} </Link>
                </div>     
            })
            return(
                <div>
                    <NewEmployee updateEmployeeArray={this.updateEmployeeArray}/>
                    <h2>Employees</h2>
                    {employees}
                </div>
            )
    }

}

export default EmployeeIndex;