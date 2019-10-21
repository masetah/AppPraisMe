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
        <Button id="registerButton" color="link" onClick={this.toggle}>Sign up.</Button>
        <Modal  isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader id="ModalHeader" toggle={this.toggle}><h3>Register Here </h3></ModalHeader>
          <ModalBody id="ModalBody">
          <form>
                <Label className="Label" for="name"> Full Name: </Label>
                <input type="text" placeholder="Bruce Wayne" name="name" onChange={this.handleChange}/>
                <br></br>
                <Label className="Label" id="emailLabel" for="email"> Email: </Label>
                <input id="emailInput" type="email" placeholder="Manager@business.com" name="email" onChange={this.handleChange}/>
                <br></br>
                <Label className="Label" for="password_digest"> Password: </Label>
                <input type="password" placeholder="Create a password" name="password_digest" onChange={this.handleChange}/>
                <br></br>
            </form>
          </ModalBody>
          <ModalFooter id="ModalFooter">
              <Button color="warning" onClick={this.createNewUser}><Link to={{pathname:`/dashboard`
                    }}>Register </Link></Button>
          </ModalFooter>
        </Modal>
            </div>
        )
    }
}

export default Register;