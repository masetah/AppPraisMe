import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

class EmployeeAppraisal extends Component {
    componentDidMount(){
        console.log(this.props.employee.name)
    }
    render(){
        const appraisals = this.props.appraisals.map((appraisal, index)=>{
            if(this.props.employee.id===appraisal.employee_id){
                return <div key={index}>
                <Link to={{pathname:`/appraisal/${appraisal.id}`,
                    state:{
                        appraisal: appraisal 
                    }
                }}>{appraisal.employee_id}, {appraisal.period_start_date}  to  {appraisal.period_end_date}</Link>
            </div>  
            }
        })
            return(
                <div className="appraisalIndex">
                    <UncontrolledDropdown setActiveFromChild>
					    <DropdownToggle  caret>
                        {this.props.employee.name}'s Appraisals
                        </DropdownToggle>
					    <DropdownMenu>
						<DropdownItem >
                            {appraisals}
                        </DropdownItem>
					</DropdownMenu>
				    </UncontrolledDropdown>
                    
                </div>
            )
    }
}

export default EmployeeAppraisal;