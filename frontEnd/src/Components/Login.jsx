import React, {Component} from 'react';
import Register from './Register'

class Login extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            password:'',
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.currentTarget.name] : e.currentTarget.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        fetch('http://localhost:3001/users', {
            method: 'POST', 
            body: JSON.stringify(this.state),
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('userId', data.user.id)
                this.props.setUser(data.user)
                this.props.history.push(`/dashboard/${data.user.id}`)
            })
        this.setState({
            username:'', 
            password:''
        })
    }

    render(){
        return(
            <div>
                <h1>AppPraise Me</h1>
                <h3>Please log in here.</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Username" name="username" onChange={this.handleChange}></input>
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