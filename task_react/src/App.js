import React from 'react';

function App() {
  const employees = [
    {id: 1, name: 'Aya', country: 'Jordan'},
    {id: 2, name: 'Sara', country: 'England'},
    {id: 3, name: 'Marwa', country: 'Egypt'},
    {id: 4, name: 'Samar', country: 'Jordan'},
    
  ];

  const filtered = employees.filter(employee => {
    return employee.country === 'England';
  });
 


  return (
    <div>
      {filtered.map(employee => {
        return (
          <div key={employee.id}>
            <h2>name: {employee.name}</h2>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default App;