import React, {Component} from 'react';
import Login from './Components/Login';
import Dashboard from './Views/Dashboard';
import EmployeeShow from './Views/EmployeeShow';
import AppraisalShow from './Views/AppraisalShow';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

class App extends Component {

  render(){
    return (
      <div className="App">
        <Router>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" exact component={Dashboard} />
          {/* <Route path="/dashboard" render={({match}) => <Dashboard 
          employees={this.state.employees[match.params.id]}
          updateEmpoyeeArray={this.updateEmployeeArray}
          updateEmployee={this.updateEmployee}
          deleteEmployee={this.deleteEmployee}
          />}/> */}
          <Route path="/employee/:id" component={EmployeeShow} />
          <Route path="/appraisal/:id" component={AppraisalShow} />
        </Router>
      </div>
    );
  }
}

export default App;
