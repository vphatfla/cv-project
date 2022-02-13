import React, {Component} from 'react';
import './App.css';
import Edit from './components/edit';
import Preview from './components/preview';

class App extends Component {
  constructor(){
   super()
   }
  render(){
    return(
      <div>
        <div className="header">
          <h1>CV Creator</h1>
        </div>
        <Edit />
      </div>
    )
  }
}

export default App;
