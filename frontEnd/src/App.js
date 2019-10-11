import React, {Component} from 'react';
import Login from './Components/Login';
import Dashboard from './Views/Dashboard';
import EmployeeShow from './Views/EmployeeShow';
import AppraisalShow from './Views/AppraisalShow';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
        user: null,
    }
}
  setUser = user => {
  this.setState({user: user})
}

  render(){
    return (
      <div className="App">
        <Router>
          <Switch>
          <Route path="/" exact render={()=>{
            return (
              <div>
                <Login user={this.state.user} setUser={this.setUser}/>
              </div>
            )
          }} />
          <Route path="/dashboard/:id" exact render={()=>{
            return (
              <div>
                <Dashboard user={this.state.user} setUser={this.setUser} />
              </div>
            )
          }} />
          <Route path="/employee/:id" component={EmployeeShow} />
          <Route path="/appraisal/:id" component={AppraisalShow} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
