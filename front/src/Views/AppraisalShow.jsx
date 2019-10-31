import React, {Component} from 'react';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import { Table, Button } from 'reactstrap';

class AppraisalShow extends Component {
  constructor(){
    super()
    this.state={
      appraisal:[],
      appraisals:[],
      employees:[] 
    }
  }
  componentDidMount(){
    this.getAppraisals();
    this.getEmployees();
    this.setState({
      appraisal:this.props.location.state.appraisal
    });
  }
  getEmployees = async () => {
    const employees =await fetch("http://localhost:3001/employees");
    const parsedResponse = await employees.json()
    this.setState({
        employees:parsedResponse.employees
    })
}
getAppraisals = async () => {
  const appraisals = await fetch("http://localhost:3001/appraisals");
  const parsedResponse = await appraisals.json();
    this.setState({
      appraisals:parsedResponse.appraisals
  })
}
  deleteAppraisal = async (id) => {
    // console.log(this.props.history);
    try{
        await fetch(`http://localhost:3001/appraisals/${id}`, {
        method:'DELETE',
        headers: {
          "Content-Type": "application/json"
      }
    });
    this.props.history.push("/dashboard")
    }catch(err){
      console.log(err)
    }
  }

  render(){
    return (
        <div className="appraisal-show">
          <Navigation
            employees={this.state.employees}
            appraisals={this.state.appraisals}
          />
          <h1>{this.props.location.state.appraisal.appraisal_name}</h1>
          <p>Period: {this.props.location.state.appraisal.period_start_date} to {this.props.location.state.appraisal.period_end_date}</p>
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Category</th>
                <th>Score</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Leadership</td>
                <td>{this.props.location.state.appraisal.leadership_score}</td>
                <td>{this.props.location.state.appraisal.leadership_description}</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>People Development</td>
                <td>{this.props.location.state.appraisal.people_development_score}</td>
                <td>{this.props.location.state.appraisal.people_development_description}</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Planning</td>
                <td>{this.props.location.state.appraisal.planning_score}</td>
                <td>{this.props.location.state.appraisal.planning_description}</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Communication</td>
                <td>{this.props.location.state.appraisal.communication_score}</td>
                <td>{this.props.location.state.appraisal.communication_description}</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Productivity</td>
                <td>{this.props.location.state.appraisal.productivity_score}</td>
                <td>{this.props.location.state.appraisal.productivity_description}</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Knowledge</td>
                <td>{this.props.location.state.appraisal.knowledge_score}</td>
                <td>{this.props.location.state.appraisal.knowledge_description}</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>Adaptablity</td>
                <td>{this.props.location.state.appraisal.adaptability_score}</td>
                <td>{this.props.location.state.appraisal.adaptability_description}</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>Initiative</td>
                <td>{this.props.location.state.appraisal.initiative_score}</td>
                <td>{this.props.location.state.appraisal.inititative_description}</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>Judgement</td>
                <td>{this.props.location.state.appraisal.judgement_score}</td>
                <td>{this.props.location.state.appraisal.judgement_description}</td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>Interpersonal Relations</td>
                <td>{this.props.location.state.appraisal.interpersonal_relations_score}</td>
                <td>{this.props.location.state.appraisal.interpersonal_relations_description}</td>
              </tr>
              </tbody>
          </Table>
    <Button color="danger" onClick={()=>{
            this.deleteAppraisal(this.props.location.state.appraisal.id)
            }}>Delete Appraisal </Button>
        <Footer/>
        </div>
    );
  }
}

export default AppraisalShow;