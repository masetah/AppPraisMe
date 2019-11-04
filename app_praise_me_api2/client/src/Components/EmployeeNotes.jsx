import React, {Component} from 'react';
import { Table } from 'reactstrap';
class EmployeeNotes extends Component {
    constructor(){
        super()
        this.state={
            employee:'',
            notes:'' 
        }
    }
    render(){
        const notes = this.props.notes.map((note, index)=>{
                if(this.props.employee.id===note.employee_id){
                    if(note.note_type==="Neutral") {
                        return <React.Fragment>
                            <tr>
                            <th scope="row">{note.note_date}</th>
                            <td><i style={{color:"gold", height:"25px", width:"25px"}} class="fa fa-minus-circle"></i></td>
                            <td>{note.canned_note}</td>
                            <td>{note.description}</td>
                            </tr> 
                            </React.Fragment>
                    }else if(note.note_type==="Praise") {
                        return <React.Fragment>
                            <tr>
                            <th scope="row">{note.note_date}</th>
                            <td><i style={{color:"lightGreen", height:"25px", width:"25px"}} class="fa fa-plus-circle"></i></td>
                            <td>{note.canned_note}</td>
                            <td>{note.description}</td>
                        </tr> 
                    </React.Fragment>
                    }else if(note.note_type==="Infraction") {
                        return <React.Fragment>
                            <tr>
                            <th scope="row">{note.note_date}</th>
                            <td><i style={{color:"red", height:"25px", width:"25px"}} class="fa fa-minus-circle"></i></td>
                            <td>{note.canned_note}</td>
                            <td>{note.description}</td>
                            </tr> 
                            </React.Fragment>
                    }
                }   
            })
                return(
                    <div >
                        <h3>Employee Notes</h3>
                    <Table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Type</th>
                            <th>Note</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    {notes}
                    </tbody> 
                    </Table>
                    </div>   

                )
                
        }
    }
    
    export default EmployeeNotes;