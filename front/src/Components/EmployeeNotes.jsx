import React, {Component} from 'react';

class EmployeeNotes extends Component {
    constructor(){
        super()
        this.state={
            employee:'',
            notes:'' 
        }
    }
    componentDidMount(){
        // this.getEmployeeNotes();
        console.log(this.props.employee.id)
        console.log(this.props.notes)
    }

    render(){
        console.log(this.props.notes)
        const notes = this.props.notes.map((note, index)=> {
                if(this.props.employee.id===note.employee_id){
                    return <div key={index}>
                    <h3>{note.employee_id}, {note.note_date}, {note.note_type}, {note.canned_note}</h3>
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