import React, {Component} from 'react';
import {
    Card, 
    CardTitle, 
    CardText } from 'react-mdl';
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
                    return <div key={index}>
                    <Card shadow={5} style={{width: '275px', margin: '15px', alignContent:'center'}}>
                    <CardTitle style={{color: 'black', height: '115px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXtUQMNzppAVEpRuLJr1G8RXlKcWVzoLTlaXik3Iy5O_bzZbTI&s) center / cover' }}>
                            {note.note_type}
                        </CardTitle>
                        <CardText style={{color: 'black', height:'115px'}}>
                            <p>{note.note_date}</p>
                            <p>{note.canned_note} /<br></br> {note.description}</p>
                            {/* <p></p> */}
                        </CardText>

                    </Card>

                </div>
                }   
            })
                return(
                    <div>
                        <h3>Employee Notes</h3>
                    <div className="notes-index">
                        {notes}
                    </div>   
                    </div>
                )
                
        }
    }
    
    export default EmployeeNotes;