import React, {Component} from 'react';
import Navigation from '../Components/Navigation';
import EmployeeIndex from '../Components/EmployeeIndex';


class Dashboard extends Component {

  render(){
    return (
        <div>
          <Navigation/>
          <h1>Manager's Dashboard</h1>
          <EmployeeIndex/>
        </div>
    );
  }
}

export default Dashboard;