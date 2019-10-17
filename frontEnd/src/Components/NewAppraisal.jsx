import React, {Component} from 'react';
import { Table, Button, FormGroup, Input } from 'reactstrap';
import Label from 'reactstrap/lib/Label';

class NewAppraisal extends Component {
  constructor(){
    super()
    this.state={
      // employee_id:32,
      appraisal_name:'',
      period_start_date:'',
      period_end_date:'',
      leadership_score:1,
      leadership_description:'',
      people_development_score:1,
      people_development_description:'',
      planning_score:1,
      planning_description:'',
      communication_score:1,
      communication_description:'',
      productivity_score:1,
      productivity_description:'',
      knowledge_score:1,
      knowledge_description:'',
      adaptability_score:1,
      adaptability_description:'',
      initiative_score:1,
      inititative_description:'',
      judgement_score:1,
      judgement_description:'',
      interpersonal_relations_score:1,
      interpersonal_relations_description:'',        
    }
  }
  handleChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}
createAppraisal = async (currentState) => {
  const createAppraisal = await fetch("http://localhost:3001/appraisals",{
    method: "POST",
    body:JSON.stringify(currentState),
    headers: {
      "Content-Type": "application/json"
    }
  })
  const parsedResponse = await createAppraisal.json();
  console.log(parsedResponse);
  // this.props.updateAppraisalArray(parsedResponse.appraisal);
}
handleSubmit= (e) => {
  e.preventDefault();
  //seed data from state into appraisals table
  this.createAppraisal(this.state)
  //redirect to appraisal show

}
  render(){
    return (
        <div className="newAppraisal">
          <h3>Add a New Appraisal Here</h3>
          <form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Input
              type="text"
              id="appraisalName"
              name="appraisal_name"
              placeholder="Employee Full Name"
              onChange={this.handleChange}/>
            <br></br>
            <Label id="dateLable" for="period_start_date">Start:</Label>
            <Input
              type="date"
              name="period_start_date"
              id="startDate"
              onChange={this.handleChange}/>
            <Label id="dateLable" for="period_end_date">End:</Label>
            <Input
              type="date"
              name="period_end_date"
              id="endDate"
              onChange={this.handleChange}/>
          </FormGroup>
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Caregory</th>
                <th>Score</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Leadership</td>
                <td>
                  <FormGroup>
                  <Input type="select" name="leadership_score" onChange={this.handleChange} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                  </FormGroup>
                </td>
                <td>
                  <FormGroup>
                  <Input type="textarea" name="leadership_description" onChange={this.handleChange} />
                  </FormGroup>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>People Development</td>
                <td>
                  <FormGroup>
                  <Input type="select" name="people_development_score" onChange={this.handleChange} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                  </FormGroup>
                </td>
                <td>
                  <FormGroup>
                  <Input type="textarea" name="people_development_description" onChange={this.handleChange} />
                  </FormGroup>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Planning</td>
                <td>
                  <FormGroup>
                  <Input type="select" name="planning_score" onChange={this.handleChange} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                  </FormGroup>
                </td>
                <td>
                  <FormGroup>
                  <Input type="textarea" name="planning_description" onChange={this.handleChange} />
                  </FormGroup>
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Communication</td>
                <td>
                  <FormGroup>
                  <Input type="select" name="communication_score" onChange={this.handleChange} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                  </FormGroup>
                </td>
                <td>
                  <FormGroup>
                  <Input type="textarea" name="communication_description" onChange={this.handleChange} />
                  </FormGroup>
                </td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Productivity</td>
                <td>
                  <FormGroup>
                  <Input type="select" name="productivity_score" onChange={this.handleChange} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                  </FormGroup>
                </td>
                <td>
                  <FormGroup>
                  <Input type="textarea" name="productivity_description" onChange={this.handleChange} />
                  </FormGroup>
                </td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Knowledge</td>
                <td>
                  <FormGroup>
                  <Input type="select" name="knowledge_score" onChange={this.handleChange} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                  </FormGroup>
                </td>
                <td>
                  <FormGroup>
                  <Input type="textarea" name="knowledge_description" onChange={this.handleChange} />
                  </FormGroup>
                </td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>Adaptability</td>
                <td>
                  <FormGroup>
                  <Input type="select" name="adaptability_score" onChange={this.handleChange} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                  </FormGroup>
                </td>
                <td>
                  <FormGroup>
                  <Input type="textarea" name="adaptability_description" onChange={this.handleChange} />
                  </FormGroup>
                </td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>Initiative</td>
                <td>
                  <FormGroup>
                  <Input type="select" name="initiative_score" onChange={this.handleChange} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                  </FormGroup>
                </td>
                <td>
                  <FormGroup>
                  <Input type="textarea" name="inititative_description" onChange={this.handleChange} />
                  </FormGroup>
                </td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>Judgement</td>
                <td>
                  <FormGroup>
                  <Input type="select" name="judgement_score" onChange={this.handleChange} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                  </FormGroup>
                </td>
                <td>
                  <FormGroup>
                  <Input type="textarea" name="judgement_description" onChange={this.handleChange} />
                  </FormGroup>
                </td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>Interpersonal Relations</td>
                <td>
                  <FormGroup>
                  <Input type="select" name="interpersonal_relations_score" onChange={this.handleChange} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                  </FormGroup>
                </td>
                <td>
                  <FormGroup>
                  <Input type="textarea" name="interpersonal_relations_description" onChange={this.handleChange} />
                  </FormGroup>
                </td>
              </tr>
            </tbody>
            </Table>
            <Button><input type="submit" value="Submit"/></Button>
          </form>
        </div>
    );
  }
}

export default NewAppraisal;