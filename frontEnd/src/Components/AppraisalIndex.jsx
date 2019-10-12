import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class AppraisalIndex extends Component {
    constructor(){
        super()
        this.state={
            appraisals:[]
        }
    }

    componentDidMount(){
        this.getAppraisals()
    }
    getAppraisals = async () => {
        const appraisals =await fetch("http://localhost:3001/appraisals");
        const parsedResponse = await appraisals.json()
        this.setState({
            appraisals:parsedResponse.appraisals
        })
      }
    render(){
        console.log(this.state.appraisals)
        const appraisals = this.state.appraisals.map((appraisal, index)=>{
            return <div key={index}>
                <Link to={{pathname:`/appraisal/${appraisal.id}`,
                    state:{
                        appraisal: appraisal 
                    }
                }}>{appraisal.period_start_date} to  {appraisal.period_end_date}</Link>
            </div>     
        })
            return(
                <div>
                    <h2>Past Appraisals</h2>
                    {appraisals}
                </div>
            )
    }

}

export default AppraisalIndex;