import React, {Component} from 'react';
import EmployeeIndex from '../Components/EmployeeIndex';
import AppraisalIndex from '../Components/AppraisalIndex';
import NewAppraisal from '../Components/NewAppraisal';

class Sidebar extends Component {
    render(){
        return(
            <div className="sidebar">
                <EmployeeIndex 
                employees={this.props.employees}
                updateEmployeeArray={this.props.updateEmployeeArray}
                updateEmployee={this.props.updateEmployee}
                deleteEmployee={this.props.deleteEmployee}
                />
                <AppraisalIndex
                appraisals={this.props.appraisals}
                />
                <NewAppraisal
                    updateAppraisalArray={this.props.updateAppraisalArray} 
                    employees={this.props.employees}
                />
            </div>

        )
    }

}

export default Sidebar;