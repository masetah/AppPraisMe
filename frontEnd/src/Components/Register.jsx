import React, {Component} from 'react';
import { UncontrolledAlert } from 'reactstrap';
class Register extends Component {
    constructor(){
        super();
        this.state = {
            name:"",
            email:"",
            confemail:"",
            password:"",
            confpassword:"",
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
     AlertExample=()=> {
        return (
          <UncontrolledAlert color="info">
            I am an alert and I can be dismissed!
          </UncontrolledAlert>
        );
      }

    createNewUser=(e)=>{
        e.preventDefault();
        if(this.state.email===this.state.confemail && this.state.password===this.state.confpassword && this.state.name.length>0){
            console.log("everything matched")
            // this.props.handleRegister(this.state);
        }if(this.state.email===this.state.confemail && this.state.password!==this.state.confpassword){
            console.log("Password did not match")
            this.AlertExample()
        }if(this.state.email!==this.state.confemail && this.state.password===this.state.confpassword){
            console.log("email did not match")
        }if(this.state.name.length===0) {
            console.log("NAME CANNOT BE BLANK")      
        }else{console.log("something went wrong")}
        
    }
    
    render(){
        return(
            <div>
                <h3>If you are new register below</h3>
            <form onSubmit={this.createNewUser}>
                <input type="text" placeholder="What's your name?" name="name" onChange={this.handleChange}/>
                <br></br>
                <input type="text" placeholder="What's your email?" name="email" onChange={this.handleChange}/>
                <br></br>
                <input type="text" placeholder="confirm your email" name="confemail" onChange={this.handleChange}/>
                <br></br>
                <input type="password" placeholder="password" name="password" onChange={this.handleChange}/>
                <br></br>
                <input type="password" placeholder="Confirm your password" name="confpassword" onChange={this.handleChange}/>
                <br></br>
                <input type="submit" value="Register Now"/>
            </form>
            </div>
        )
    }
}

export default Register;