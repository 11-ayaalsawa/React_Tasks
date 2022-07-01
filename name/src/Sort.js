import React from "react";


function Num(){
const num = ["5", "-2", "23", "7","87", "-42", "509"];
const sort = num.sort()

return(
    <div className="main">
   
        <h1>{sort+' '}</h1>
  </div>
)


}

export default Num;