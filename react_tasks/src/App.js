import React , {Component} from 'react';
import Team from "./Team";
import Counter from "./Counter";
import './App.css';

class App extends Component{
    render(){
return(
  <>
  <div>
  <Counter />
  </div>
<div className='container'>
<Team name='Aya' lorem='lorem ipsum is great text' likes='Number of likes' />
<Team name='Sara' lorem='lorem ipsum is great text' likes='Number of likes' />
<Team name='Marwa' lorem='lorem ipsum is great text' likes='Number of likes' />
<Team name='Ghufran' lorem='lorem ipsum is great text' likes='Number of likes' />
</div>
</>
);
  };
};

export default App;