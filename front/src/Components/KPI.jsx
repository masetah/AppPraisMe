import React, {Component} from 'react';

class KPI extends Component {
    constructor(){
      super()
      this.state={

      }
    }
    render(){
        return (
            <div className="KPI-body">
              <h3>This will be KPI</h3>
              <ul>
                  <li>average leadership</li>
                  <li>average people development</li>
                  <li>average planning</li>
                  <li>average communication</li>
                  <li>average productivity</li>
                  <li>average knowledge</li>
                  <li>average adapability</li>
                  <li>average intiative</li>
                  <li>average judgement</li>
                  <li>average interpersonal</li>
                  <li>Team score</li>
              </ul>
            </div>
        );
      }
    }
    
    export default KPI;