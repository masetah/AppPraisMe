import React, {Component} from 'react';
import Navigation from '../Components/Navigation';
import EmployeeIndex from '../Components/EmployeeIndex';
import NewEmployee from '../Components/NewEmployee';

class Dashboard extends Component {
  render(){
    return (
        <div>
          <Navigation/>
          <h1>Manager's Dashboard</h1>
          <NewEmployee/>
          <EmployeeIndex/>
          
        </div>
    );
  }
}

export default Dashboard;