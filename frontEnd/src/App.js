import React from 'react';
import Login from './Components/Login';
import Register from './Components/Register';
// import ManagerDashboard from './Views/ManagerDash';
// import EmployeeShow from './Views/EmployeeShow';
// import AppraisalShow from './Views/AppraisalShow';
// import NewAppraisal from './Views/NewAppraisal';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>AppPraise Me</h1>
      <Login/>
      <Register/>
      {/* <ManagerDashboard/>
      <EmployeeShow/>
      <AppraisalShow/>
      <NewAppraisal/> */}
    </div>
  );
}

export default App;
