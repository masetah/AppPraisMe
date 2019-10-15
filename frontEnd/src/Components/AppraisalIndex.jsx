import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class AppraisalIndex extends Component {

    render(){
        // console.log(this.state.appraisals)
        const appraisals = this.props.appraisals.map((appraisal, index)=>{
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