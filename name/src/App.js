import React, { useState } from 'react';
import "./App.css";
import Slider from './Slider';
import Num from './Sort';
import Fruits from './Fruits';
import Show from './Show';

function App() {
const [result , disList] = useState('');
  const person = ['bahaa', 'aya', 'dyar', 'gufran', 'obada', 'anas', 'raghad', 'tamara', 'ibrahim'];
  
  return (
    <div className='App'>
      <h1> Task 1</h1>
      <input type='text' id='sfilter' onChange= {(event)  => {disList(event.target.value)}}/>
      {person.filter(name1=>name1.includes(result)).map(filteredName=>(
         <li>
          {filteredName}
        </li>
      ))}

<hr/>
        <h1> Task 2</h1>
      <Slider/>
      <hr/>
      <h1> Task 3</h1>
      <Num/>
      <hr/>
      <h1> Task 4</h1>
      <Fruits/>
      <hr/>
      <h1> Task 5</h1>
      <Show/>
    </div>

  );
}


export default App;