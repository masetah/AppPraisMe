import React, {Component} from 'react';
// import NewEmployee from './NewEmployee';
import {Link} from 'react-router-dom';
import {UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

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
            return <div key={index} >
                <Link to={{pathname:`/employee/${employee.id}`,
                    state:{
                        employee: employee 
                    }
                }}>{employee.name} </Link>
            </div>     
        })
            return(
                <div className='employeeIndex'>
                    <h3>Current Employees</h3>
                    <UncontrolledDropdown setActiveFromChild>
					    <DropdownToggle  caret>
						    Employees
                        </DropdownToggle>
					    <DropdownMenu>
						<DropdownItem >
                            {employees}
                        </DropdownItem>
					</DropdownMenu>
				    </UncontrolledDropdown>
                </div>
            )
    }

}

export default EmployeeIndex;