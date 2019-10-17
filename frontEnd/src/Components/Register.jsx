import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap/lib';
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
            <div>
        <Button color="warning" onClick={this.toggle}>Register</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Register Here </ModalHeader>
          <ModalBody>
          <form>
                <input type="text" placeholder="Full Name" name="name" onChange={this.handleChange}/>
                <br></br>
                <input type="email" placeholder="Email" name="email" onChange={this.handleChange}/>
                <br></br>
                <input type="password" placeholder="Create a password" name="password_digest" onChange={this.handleChange}/>
                <br></br>
            </form>
          </ModalBody>
          <ModalFooter>
              <Button color="warning" onClick={this.createNewUser}><Link to={{pathname:`/dashboard`
                    }}>Register </Link></Button>
          </ModalFooter>
        </Modal>
            </div>
        )
    }
}

export default Register;