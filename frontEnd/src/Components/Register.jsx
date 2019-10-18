import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap/lib';
import {Link} from 'react-router-dom';

class Register extends Component {
    constructor(){
        super();
        this.state = {
            name:'',
            email:'',
            password_digest:'',
            modal: false,
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    toggle= () =>{
        this.setState({
            modal: !this.state.modal
        })
    }
    
    createNewUser= async (e) => {
        e.preventDefault();
        try{
                console.log("everything matched")
                this.toggle();
                delete this.state.modal;
                this.setState(this.state);
                console.log(this.state)
                const createUser = await fetch("http://localhost:3001/users",{
                    method: "POST",
                    body:JSON.stringify(this.state),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                const parsedResponse = await createUser.json();
                    console.log(parsedResponse);
                    this.setState({
                        name:'',
                        email:'',
                        password:'',
                    })     
        }catch(err){
            console.log(err)
        }
    }

    render(){
        return(
            <div >
        <Button id="registerButton" color="warning" onClick={this.toggle}>Register</Button>
        <Modal  isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader id="registerModalHeader" toggle={this.toggle}><h3>Register Here </h3></ModalHeader>
          <ModalBody id="registerModalBody">
          <form>
                <Label id="Label" for="name"> Full Name: </Label>
                <input type="text" placeholder="Firstname Lastname" name="name" onChange={this.handleChange}/>
                <br></br>
                <Label id="Label" for="email"> Email: </Label>
                <input type="email" placeholder="Manager@business.com" name="email" onChange={this.handleChange}/>
                <br></br>
                <Label id="Label" for="password_digest"> Password: </Label>
                <input type="password" placeholder="Create a password" name="password_digest" onChange={this.handleChange}/>
                <br></br>
            </form>
          </ModalBody>
          <ModalFooter id="registerModalFooter">
              <Button color="warning" onClick={this.createNewUser}><Link to={{pathname:`/dashboard`
                    }}>Register </Link></Button>
          </ModalFooter>
        </Modal>
            </div>
        )
    }
}

export default Register;