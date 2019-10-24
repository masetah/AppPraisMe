import React, {Component} from 'react';
import {Button } from 'reactstrap';
import {Label, FormGroup, Input } from 'reactstrap/lib';

class NewEmployeeNote extends Component {
    constructor(){
        super()
        this.state={
            note_date:"",
            type:"Praise",
            intensity: 0,
            canned_note:"",
            description:""
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.currentTarget.name] : e.currentTarget.value
        })
    }

    createNote = async (currentState) => {
        const createNote = await fetch("http://localhost:3001/notes",{
          method: "POST",
          body:JSON.stringify(currentState),
          headers: {
            "Content-Type": "application/json"
          }
        })
        const parsedResponse = await createNote.json();
        console.log(parsedResponse);
        // this.props.updateAppraisalArray(parsedResponse.appraisal);
      }
    handleSubmit= (e) => {
        e.preventDefault();
        this.createNote(this.state);
        
    }
    render(){
        return(
            <div className="new-employee-note">
                <h3>Add a New Employee Note</h3>
                <form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Input
                    type="date"
                    id="note_date"
                    name="note_date"
                    onChange={this.handleChange}>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Input type="select"  name="type" onChange={this.handleChange} >
                    <option disabled>Type</option>
                    <option>Praise</option>
                    <option>Neutral</option>
                    <option>Infraction</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Input type="select"  name="intensity" onChange={this.handleChange} >
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Input type="select"  name="canned_note" onChange={this.handleChange} >
                    <option disabled>Praise</option>
                    <option>Habit 1</option>
                    <option>Habit 2</option>
                    <option>Habit 3</option>
                    <option>Habit 4</option>
                    <option>Habit 5</option>
                    <option>Habit 6</option>
                    <option>Habit 7</option>
                    <option disabled>Neutral</option>
                    <option>Worked Holiday</option>
                    <option>Initiatied Shift Swap</option>
                    <option>Worked Overtime</option>
                    <option>Excused Tardy</option>
                    <option>Excused Absence</option>
                    <option disabled>Infraction</option>
                    <option>Unexcused Tardy</option>
                    <option>Unexcused Absence</option>
                    <option>Disrespectful</option>
                    <option>Not Following Policy</option>
                    <option>Dresscode</option>
                    <option>Damaged Company Property</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Input type="textarea" placeholder="Describe the situation" name="description" onChange={this.handleChange} >
                    </Input>
                  </FormGroup>
                    <Button type="submit" color="warning" > Submit </Button>
                </form>
            </div>
        )
    }
}

export default NewEmployeeNote;