import React, {Component} from 'react';
import Register from './Register'

class Login extends Component {
    constructor(){
        super();
        this.state = {
            email:"",
            password:"",
        }
    }
    
    handleChange=(e)=>{
        this.setState({
            [e.currentTarget.name] : e.currentTarget.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.handleLogin(this.state);
    }

    render(){
        return(
            <div>
                <h1>AppPraise Me</h1>
                <h3>Please log in here.</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="email" name="email" onChange={this.handleChange}></input>
                    <br></br>
                    <input type="password" placeholder="password" name="password" onChange={this.handleChange}></input>
                    <br></br>
                    <input type="submit" value="Login"></input>
                </form>
                <Register/>
            </div>
        )
    }
}

export default Login;