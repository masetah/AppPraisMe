import React, {Component} from 'react';
import Navigation from '../Components/Navigation'
import { Table } from 'reactstrap';
class AppraisalShow extends Component {
  constructor(){
    super()
    this.state={
      appraisal:[]
    }
  }
  componentDidMount(){
    this.setState({
      appraisal:this.props.location.state.appraisal
    });
    
  }
  render(){
    console.log(this.state)
    return (
        <div>
          <Navigation/>
          <h1>Appraisal Show</h1>
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
          <td>{this.state.appraisal.leadership_score}</td>
          <td>{this.state.appraisal.leadership_description}</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>People Development</td>
          <td>{this.state.appraisal.people_development_score}</td>
          <td>{this.state.appraisal.people_development_description}</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Planning</td>
          <td>{this.state.appraisal.planning_score}</td>
          <td>{this.state.appraisal.planning_description}</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Communication</td>
          <td>{this.state.appraisal.communication_score}</td>
          <td>{this.state.appraisal.communication_description}</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Productivity</td>
          <td>{this.state.appraisal.productivity_score}</td>
          <td>{this.state.appraisal.productivity_description}</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>Knowledge</td>
          <td>{this.state.appraisal.knowledge_score}</td>
          <td>{this.state.appraisal.knowledge_description}</td>
        </tr>
        <tr>
          <th scope="row">7</th>
          <td>Adaptablity</td>
          <td>{this.state.appraisal.adaptability_score}</td>
          <td>{this.state.appraisal.adaptability_description}</td>
        </tr>
        <tr>
          <th scope="row">8</th>
          <td>Initiative</td>
          <td>{this.state.appraisal.initiative_score}</td>
          <td>{this.state.appraisal.inititative_description}</td>
        </tr>
        <tr>
          <th scope="row">9</th>
          <td>Judgement</td>
          <td>{this.state.appraisal.judgement_score}</td>
          <td>{this.state.appraisal.judgement_description}</td>
        </tr>
        <tr>
          <th scope="row">10</th>
          <td>Interpersonal Relations</td>
          <td>{this.state.appraisal.interpersonal_relations_score}</td>
          <td>{this.state.appraisal.interpersonal_relations_description}</td>
        </tr>
      </tbody>
    </Table>
        </div>
    );
  }
}

export default AppraisalShow;