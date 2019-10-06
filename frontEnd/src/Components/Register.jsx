import React, {Component} from 'react';

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

    createNewUser=(e)=>{
        e.preventDefault();
        if(this.state.email===this.state.confemail && this.state.password===this.state.confpassword){
            this.props.handleRegister(this.state);
        }
        
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