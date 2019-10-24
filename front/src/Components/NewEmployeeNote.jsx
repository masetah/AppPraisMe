import React, {Component} from 'react';
import Label from 'reactstrap/lib/Label';
import {Button} from 'reactstrap';

class NewEmployeeNote extends Component {
    constructor(){
        super()
        this.state={
            note_date:"",
            type:"",
            intensity:"",
            note:"",
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
                    <Label className="Label" for="note_date">Date: </Label>
                    <input type="date"  name="note_date" onChange={this.handleChange}></input>
                    
                    {/* Types */}
                    <h5>Type</h5>
                    <Label className="Label" >Praise: </Label>
                    <input type="radio"  name="type"  value="Praise" onChange={this.handleChange}/>
                    <Label className="Label" >Neutral: </Label>
                    <input type="radio"  name="type"  value="Neutral" onChange={this.handleChange}/>
                    <Label className="Label" >Infraction: </Label>
                    <input type="radio"  name="type"  value="Infraction" onChange={this.handleChange}/>
                    
                    {/* Praise Notes */}
                    <h5>Praise</h5>
                    <Label className="Label" >Habit 1: </Label>
                    <input type="radio"  name="note"  value="Habit 1" onChange={this.handleChange}/>
                    <Label className="Label" >Habit 2: </Label>
                    <input type="radio"  name="note"  value="Habit 2" onChange={this.handleChange}/>
                    <Label className="Label" >Habit 3: </Label>
                    <input type="radio"  name="note"  value="Habit 3" onChange={this.handleChange}/>
                    <Label className="Label" >Habit 4: </Label>
                    <input type="radio"  name="note"  value="Habit 4" onChange={this.handleChange}/>
                    <Label className="Label" >Habit 5: </Label>
                    <input type="radio"  name="note"  value="Habit 5" onChange={this.handleChange}/>
                    <Label className="Label" >Habit 6: </Label>
                    <input type="radio"  name="note"  value="Habit 6" onChange={this.handleChange}/>
                    <Label className="Label" >Habit 7: </Label>
                    <input type="radio"  name="note"  value="Habit 7" onChange={this.handleChange}/>
                    <Label className="Label" >Other: </Label>
                    <input type="text"  name="note"  placeholder="Other Praise Note" onChange={this.handleChange}/>
                    
                    {/* Neutral Notes */}
                    <h5>Neutral</h5>
                    <Label className="Label" >Worked Holiday:</Label>
                    <input type="radio"  name="note"  value="Worked Holiday" onChange={this.handleChange}/>
                    <Label className="Label" >Initiated Shift Swap:</Label>
                    <input type="radio"  name="note"  value="Initiated Swapped Shift" onChange={this.handleChange}/>
                    <Label className="Label" >Worked Overtime:</Label>
                    <input type="radio"  name="note"  value="Worked Overtime" onChange={this.handleChange}/>
                    <Label className="Label" >Excused Tardy:</Label>
                    <input type="radio"  name="note"  value="Excused Tardy" onChange={this.handleChange}/>
                    <Label className="Label" >Excused Absence:</Label>
                    <input type="radio"  name="note"  value="Excused Absence" onChange={this.handleChange}/>
                    <Label className="Label" >Other: </Label>
                    <input type="text"  name="note"  placeholder="Other Neutral Note" onChange={this.handleChange}/>
                    
                    {/* Infraction Notes */}
                    <h5>Infraction</h5>
                    <Label className="Label" >Unexcused Tardy:</Label>
                    <input type="radio"  name="note"  value="Unexcused Tardy" onChange={this.handleChange}/>
                    <Label className="Label" >Unexcused Absence:</Label>
                    <input type="radio"  name="note"  value="Unexcused Absence" onChange={this.handleChange}/>
                    <Label className="Label" >Disprespectful:</Label>
                    <input type="radio"  name="note"  value="Disrespectful" onChange={this.handleChange}/>
                    <Label className="Label" >Damaged Property:</Label>
                    <input type="radio"  name="note"  value="Damaged Property" onChange={this.handleChange}/>
                    <Label className="Label" >Not Following Policy:</Label>
                    <input type="radio"  name="note"  value="Not following Policy" onChange={this.handleChange}/>
                    <Label className="Label" >Dresscode:</Label>
                    <input type="radio"  name="note"  value="Dresscode" onChange={this.handleChange}/>
                    <Label className="Label" >Other: </Label>
                    <input type="text"  name="note"  placeholder="Other Infraction Note" onChange={this.handleChange}/>
                    
                    <h5>Intensity</h5>
                    <Label className="Label">0</Label>
                    <input type="radio"  name="intensity"  value="0" onChange={this.handleChange}/>
                    <Label className="Label">1</Label>
                    <input type="radio"  name="intensity"  value="1" onChange={this.handleChange}/>
                    <Label className="Label">2</Label>
                    <input type="radio"  name="intensity"  value="2" onChange={this.handleChange}/>
                    
                    <h5>Description</h5>
                    <textarea  name="description"  placeholder="Describe the situation" onChange={this.handleChange}/>
                    <br></br>
                    <Button type="submit" color="warning" > Submit </Button>
                </form>
            </div>
        )
    }
}

export default NewEmployeeNote;