import React, {Component} from 'react';

class Register extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            password:'',
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    createNewUser= async (e) => {
        e.preventDefault();
        try{
                console.log("everything matched")
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
                        username:'',
                        password:'',
                    })    
        }catch(err){
            console.log(err)
        }
    }
    // createUser = async (userInfo) => {
    //     const createUser = await fetch("http://localhost:3001/users",{
    //       method: "POST",
    //       body:JSON.stringify(userInfo),
    //       headers: {
    //         "Content-Type": "application/json"
    //       }
    //     })
    //     const parsedResponse = await createUser.json();
    //     console.log(parsedResponse);
    // }
        
    render(){
        return(
            <div>
                <h3>If you are new register below</h3>
            <form onSubmit={this.createNewUser}>
                <input type="text" placeholder="Create a username" name="username" onChange={this.handleChange}/>
                <br></br>
                <input type="password" placeholder="Create a password" name="password" onChange={this.handleChange}/>
                <br></br>
                <input type="submit" value="Register Now"/>
            </form>
            </div>
        )
    }
}

export default Register;