import React, { PureComponent } from 'react'
import EvaluateCompoent from './components/EvaluateCompoent/EvaluateCompoent'
import './App.css'

export class App extends PureComponent {
  constructor(props) {
   super(props);
   this.state = {
     evaluateList = [{

     }]
   }
  }
  render() {
    return (
      <div>
        <EvaluateCompoent evaluateList={this.state.evaluateList}/>
      </div>
    )
  }
}

export default App

