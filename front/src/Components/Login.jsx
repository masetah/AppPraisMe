import React, {Component} from 'react';
import { Button } from 'reactstrap/lib';
import Register from './Register';
import {Link} from 'react-router-dom';
import Footer from '../Components/Footer';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            email: '123',
            name: '', 
            user_id: ''
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.currentTarget.name] : e.currentTarget.value
        })
    }

    handleLogin=async(e)=>{
        e.preventDefault();
        try{
            const login = await fetch('http://localhost:3001/sessions', {
                method: 'POST', 
                body: JSON.stringify(this.state),
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json'
                }
            })
            const parsedResponse = await login.json();
                        console.log(parsedResponse);
                        this.setState({
                            name:parsedResponse.user.name,
                            email:parsedResponse.user.email,
                            user_id: parsedResponse.user.id, 
                        }) 
                        console.log(this.state)    
        }catch(err){
            console.log(err)
        }
    }

    render(){
        return(
            <div className="login">
                <form className="form-signin" onSubmit={this.handleLogin}>
                <img className="loginLogo" src="Logos/web-page.png" alt="icon" height="75px" width="50px"/>
                <h3 className="form-signin-heading">Log into AppPraise Me</h3>
                    <input className="form-control" type="text" placeholder="Email Address" name="email" autoComplete="off" onChange={this.handleChange}></input>
                    <input className="form-control" type="password" placeholder="Password" name="password" autoComplete="off" onChange={this.handleChange}></input>
                    <label className="checkbox">
                        <input
                        type="checkbox"
                        value="remember-me"
                        id="rememberMe"
                        name="rememberMe"
                        />{" "}
                        Remember me
                    </label>
                    <button className="btn btn-lg btn-primary btn-block" id="loginButton" type="submit">
                        <Link id="loginLink" to={{pathname:`/dashboard`, 
                        state: this.state
                    }}>Login</Link> 
                    </button>
                    <Button id="forgot-password" color="link" >Forgot Password?</Button>
                    <Register />
                </form>
                <p id="disclaimer">This is only a demo site. Do not leave sensitive information. To gain access simply click log in.</p>
                
                <Footer/>
            </div>
        )
    }
}

export default Login;