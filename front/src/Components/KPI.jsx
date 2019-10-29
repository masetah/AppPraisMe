import React, {Component} from 'react';
// import * as CanvasJSReact from './assets/canvasjs.react';
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class KPI extends Component {
    constructor(){
      super()
      this.state={

      }
    }
    render(){
      const options = {
        title: {
          text: "Basic Column Chart in React"
        },
        data: [{				
                  type: "column",
                  dataPoints: [
                      { label: "Apple",  y: 10  },
                      { label: "Orange", y: 15  },
                      { label: "Banana", y: 25  },
                      { label: "Mango",  y: 30  },
                      { label: "Grape",  y: 28  }
                  ]
         }]
     }
        return (
            <div className="KPI-body">
            {/* <CanvasJSChart options = {options}/> */}
            </div>
        );
      }
    }
    
    export default KPI;