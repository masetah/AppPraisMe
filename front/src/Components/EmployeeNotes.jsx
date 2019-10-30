import React, {Component} from 'react';

class EmployeeNotes extends Component {
    constructor(){
        super()
        this.state={
            employee:'',
            notes:'' 
        }
    }
    render(){
        console.log(this.props.notes)
        const notes = this.props.notes.map((note, index)=> {
                if(this.props.employee.id===note.employee_id){
                    return <div key={index}>
                    <ul style={{color:'black'}}> {note.note_type}
                        <li>{note.note_date}</li>
                        <li>{note.canned_note}</li>
                        <li>{note.description}</li>
                    </ul>
                </div>
                }   
            })
                return(
                    <div className="notes-index">
                        <h3>Employee Notes</h3>
                                {notes}
                    </div>
                )
                
        }
    }
    
    export default EmployeeNotes;