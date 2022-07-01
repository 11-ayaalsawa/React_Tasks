import React , {Component} from 'react';
import Team from "./Team";
import Counter from "./Counter";
import App1 from "./Counter2";

import './App.css';

class App extends Component{
    render(){
return(
  <>
  <div style={{textAlign: "center"}}>
    <h1  >Task 1</h1>
  
  <Counter />
  <hr/>
  </div>
  <h1 style={{textAlign: "center"}}> Task 2</h1>
<div className='container' style={{textAlign: "center"}}>
<Team name='Aya' lorem='lorem ipsum is great text' likes='Number of likes' />
<Team name='Sara' lorem='lorem ipsum is great text' likes='Number of likes' />
<Team name='Marwa' lorem='lorem ipsum is great text' likes='Number of likes' />
<Team name='Ghufran' lorem='lorem ipsum is great text' likes='Number of likes' />
</div>
<hr/>

<div style={{textAlign: "center"}}>
<h1> Task 1 in easy way</h1>
  <App1 />
  </div>
  <hr/>
</>
);
  };
};

export default App;