import React, {Component} from 'react';
import { Nav, NavLink } from 'reactstrap/lib';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <Nav defaultActiveKey="/home" className="flex-column">
            <NavLink href="/home">Employees</NavLink>
            <NavLink eventKey="link-1">Appraisals</NavLink>
            <NavLink eventKey="link-2">New Appraisal</NavLink>
        </Nav>
      </div>
    );
  }
}

export default Sidebar;