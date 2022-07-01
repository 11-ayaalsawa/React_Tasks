import React, { useState } from 'react';
import "./App.css";

function App2() {
const [result , disList] = useState('');
  const person = ['bahaa', 'aya', 'dyar', 'ghufran', 'obada', 'anas', 'raghad', 'tamara', 'ibrahim', 'marwa', 'sara', 'roa', 'duaa', 'samar'];
  
  return (
    <div className='App'>
      <input type='text' id='sfilter' onChange= {(event)  => {disList(event.target.value)}}/>
      {person.filter(name1=>name1.includes(result)).map(filteredName=>(
         <li>
          {filteredName}
        </li>
      ))}
      
    </div>

  );
}


export default App2;