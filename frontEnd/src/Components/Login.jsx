import React, {Component} from 'react';
import { Button } from 'reactstrap/lib';
import Register from './Register';
import {Link} from 'react-router-dom';

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
                // .then(response => response.json())
                // .then(data => {
                //     localStorage.setItem('userId', data.user.id)
                //     this.props.setUser(data.user)
                // })
        }catch(err){
            console.log(err)
        }
    }

    render(){
        return(
            <div>
                <h1>AppPraise Me</h1>
                <h3>Please log in here.</h3>
                <form onSubmit={this.handleLogin}>
                    <input type="text" placeholder="Email" name="email" onChange={this.handleChange}></input>
                    <br></br>
                    <input type="password" placeholder="Password" name="password" onChange={this.handleChange}></input>
                    <br></br>
                    <Button type="submit">
                        <Link to={{pathname:`/dashboard`, 
                        state: this.state
                    }}>Login </Link>
                    </Button> 
                </form>
                <Register/>
            </div>
        )
    }
}

export default Login;