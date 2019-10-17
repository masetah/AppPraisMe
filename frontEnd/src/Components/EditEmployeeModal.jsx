import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap/lib';

class UpdateEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: this.props.employee.name,
        position: props.employee.position,
        hire_date: props.employee.hire_date,
        manager_id: props.employee.manager_id,
        id: props.employee.id,
        modal:false,
    };
  }

toggle= () =>{
    this.setState({
        modal: !this.state.modal
    })
}

handleChange = (e) => {
    this.setState({
        [e.target.name] : e.target.value
    })
}

handleSubmit = (e)=> {
    e.preventDefault();
    console.log(this.state)
    this.props.updateEmployee(this.state);
    this.toggle();
}
  render() {
    return (
      <div className="updateEmployee">
        <Button color="warning" onClick={this.toggle}>Edit {this.state.name} </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Update {this.state.name} </ModalHeader>
          <ModalBody>
            <form onSubmit={this.handleSubmit}>
                <Label className="modalInput" for="name"> Name: </Label>
                <input type="text" name="name" value={this.state.name}  onChange={this.handleChange}></input><br></br>
                <Label className="modalInput" for="position"> Position: </Label>
                <input type="text" name="position" value={this.state.position} onChange={this.handleChange}></input><br></br>
                <Label className="modalInput" for="hire_date"> Hire Date: </Label>
                <input type="date" name="hire_date" value={this.state.hire_date} onChange={this.handleChange}></input><br></br>
            </form>
          </ModalBody>
          <ModalFooter>
              <Button color="primary" onClick={this.handleSubmit}>Update </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default UpdateEmployee;