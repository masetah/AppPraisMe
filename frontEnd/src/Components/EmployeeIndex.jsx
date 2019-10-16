import React, {Component} from 'react';
import NewEmployee from './NewEmployee';
import {Link} from 'react-router-dom';

class EmployeeIndex extends Component {
    constructor(){
        super()
        this.state={
            employees:[],
        }
    }

    componentDidMount(){
        this.setState({
          employees:this.props.employees,
        })
    }

    render(){
        const employees = this.props.employees.map((employee, index)=>{
            return <div key={index}>
                <Link to={{pathname:`/employee/${employee.id}`,
                    state:{
                        employee: employee 
                    }
                }}>{employee.name} </Link>
            </div>     
        })
            return(
                <div>
                    <NewEmployee updateEmployeeArray={this.props.updateEmployeeArray}/>
                    <h2>Employees</h2>
                    {employees}
                </div>
            )
    }

}

export default EmployeeIndex;