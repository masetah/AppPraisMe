import React, {Component} from 'react';
import { Button } from 'reactstrap/lib';
import Register from './Register';
import {Link} from 'react-router-dom';
import Footer from '../Components/Footer';
import Label from 'reactstrap/lib/Label';

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
            <div className="login">
                <h1>AppPraise Me</h1>
                <p className="description">Do you manage a team and find yourself scrambling during appraisal time? AppPraise Me has got your back. With this tool you are able to keep track of your employees and their appraisals all in one place. Register for free to get started.</p>
                <Register/>
                <h3>Already Registered? Log in here.</h3>
                <form onSubmit={this.handleLogin}>
                    <Label className="Label" id="label-email" for="email">Email:</Label>
                    <input type="text" placeholder="manger@business.com" name="email" autoComplete="off" onChange={this.handleChange}></input>
                    <Label className="Label" for="password">Password:</Label>
                    <input type="password" placeholder="Password" name="password" autoComplete="off" onChange={this.handleChange}></input>
                    
                    <Button id="loginButton" color="warning" type="submit">
                        <Link to={{pathname:`/dashboard`, 
                        state: this.state
                    }}>Login</Link> 
                    </Button> 
                </form>
                <iframe id="gif"title="OfficeSpaceGif" src="https://giphy.com/embed/b7MdMkkFCyCWI" width="480" height="258" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                <Footer/>
            </div>
        )
    }
}

export default Login;