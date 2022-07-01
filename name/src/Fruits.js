import React from "react";

 function Fruits() {
    const fruits = [
      {id: 1, name: 'Apple', color: 'Yellow'},
      {id: 2, name: 'Strawberry', color: 'Red'},
      {id: 3, name: 'Kiwi', color: 'Green'},
   
    ];
  
  
    return (
      <div>

        {fruits.map(fruit =>{
            return( <div key={fruit.id}>
                <h4>id: {fruit.id}</h4>
                <h4>name: {fruit.name}</h4>
                <h4>country: {fruit.color}</h4>
    
               <p>----------------------------</p>
              </div>)
        })}
  
           
  
      </div>

    )

  }

  export default Fruits;