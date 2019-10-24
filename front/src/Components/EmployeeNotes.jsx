import React, {Component} from 'react';

class EmployeeNotes extends Component {

    render(){
        const notes = this.props.notes.map((note, index)=>{
                return <div key={index}>
                    <p>{note.id}</p>
                </div>     
            })
                return(
                    <div className="appraisalIndex">
                        <h3>Employee Notes</h3>
                                {notes}

                        
                    </div>
                )
        }
    }
    
    export default EmployeeNotes;