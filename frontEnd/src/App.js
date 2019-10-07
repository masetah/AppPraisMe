import React, {Component} from 'react';
import Login from './Components/Login';
import Dashboard from './Views/Dashboard';
import EmployeeShow from './Views/EmployeeShow';
import AppraisalShow from './Views/AppraisalShow';
import NewAppraisal from './Views/NewAppraisal';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  render(){
    return (
      
      <div className="App">
        <Router>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/employee" component={EmployeeShow} />
          <Route path="/appraisal" component={AppraisalShow} />
          <Route path="/new-appraisal" component={NewAppraisal} />
        </Router>
      </div>
    );
  }
}

export default App;
