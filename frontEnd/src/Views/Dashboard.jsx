import React, {Component} from 'react';
import Navigation from '../Components/Navigation'

class Dashboard extends Component {
  render(){
    return (
        <div>
          <Navigation/>
          <h1>Manager's Dashboard</h1>
        </div>
    );
  }
}

export default Dashboard;