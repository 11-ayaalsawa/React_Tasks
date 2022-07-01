import React from "react";
import axios from "axios";

class API extends React.Component {
    state = {
        persons: [],
      }
    
    
      componentDidMount() {
        axios.get(`http://localhost/php_tasks/php%20practice/read.php`)
          .then(res => {
            // const persons = res.data;
            this.setState({persons: res.data });
          })

         
      }


      render() {
        const{persons}=this.state
        return (
            <>
          
            
            {JSON.stringify(persons)}
          
         </>
        )
      }
    }
 
export default API;