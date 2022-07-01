
import { React, useState } from "react";
import "./App.css"
import App2 from "./App2";
function App() {
  const data = ["Banana", "Orange", "Apple", "Mango"];
  const [sortState, setstate] = useState("none");
  const sortMethods = {
    none: { method: (a, b) => null },
    ascending: { method: undefined },
    descending: { method: (a, b) => (a > b ? -1 : 1) },
  };

  

  
  return (
    <div className="main">
      <select defaultValue={'DEFAULT'} onChange={(e) => setstate(e.target.value)}>
        <option value="DEFAULT" disabled>None</option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
      <ul>
        {data.sort(sortMethods[sortState].method).map((element, index) => (
          <li key={index}>{element}</li>
        ))}

      </ul>

      <hr/>

      <div >
        <App2/>
      </div>
    </div>


  );
}
export default App;

// .sort(sortMethods[sortState].method)