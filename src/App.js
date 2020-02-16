import React, {Component} from 'react';
import Todos from './components/Todos';

import './App.css'

class App extends Component {
  state = {
    todos:[{
      id: 1,
      title: 'Clean up the room',
      completed: false
    },
    {
      id: 2,
      title: 'Take down trash',
      completed: false
    },
    {
      id: 3,
      title: 'Go shopping',
      completed: false
    }
  ]
}
render(){
  console.log(this.state)
  return (
    <div className="App">
     <Todos todos={this.state.todos}/>
    </div>
  );
}
  
}

export default App;
