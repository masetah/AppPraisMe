import React, {Component} from 'react';
import CanvasJSReact from '../canvasjs.react';
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class KPI extends Component {

    render(){
      const options = {
        theme: "dark2",
        title: {
          text: "Your Team's Appraisal KPI"
        },
        data: [{				
                  type: "column",
                  dataPoints: [
                      { label: "Leadership",  y: 2.5  },
                      { label: "People Development", y: 5  },
                      { label: "Planning", y: 1  },
                      { label: "Communication",  y: 1.25  },
                      { label: "Productivity",  y: 4  },
                      { label: "Knowledge",  y: 3  },
                      { label: "Adaptability",  y: 2.2  },
                      { label: "Initiative",  y: 1.9  },
                      { label: "Judgement",  y: 3  },
                      { label: "Interpersonal Relations",  y: 2.6  }
                  ]
         }]
     }
        return (
            <div className="KPI-body">
            <CanvasJSChart options = {options}/>
            </div>
        );
      }
    }
    
    export default KPI;