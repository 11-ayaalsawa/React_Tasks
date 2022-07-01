import React from "react";
import  Api2 from './Api';
import Search from './Components/Search';

import './App.css';
class Api extends React.Component {

    // Constructor
    constructor(props) {
        super(props);

        this.state = {
            // items: [],
            // DataisLoaded: false,
      namee:'dyar'
        };
    }

    // ComponentDidMount is used to
    // execute the code
    componentDidMount() {

//         fetch(
// "https://jsonplaceholder.typicode.com/users%22)
//             .then((res) => res.json())
//             .then((json) => {
//                 this.setState({
//                     items: json,
//                     DataisLoaded: true
//                 });
//             })

      setTimeout(() => {
        this.setState({namee: "bahaa"})
      }, 3000)


    }


  componentDidUpdate() {
    setTimeout(() => {
      document.getElementById("mydiv").innerHTML =
      "Hello World " ;
    }, 2000);

  }
    render() {
        const {namee } = this.state;
    // const {items, DataisLoaded,namee } = this.state;

        // if (!DataisLoaded) return <div>
        //     <h1> Pleses wait some time.... </h1> </div> ;

        return (
        <div className = "App">
            {/* <h1> Fetch data from an api in react </h1> {
                items.map((item) => (
                <ol key = { item.id } >
                    User_Name: { item.username },
                    Full_Name: { item.name },
                    User_Email: { item.email }
                    </ol>
                ))
            } */}
      <h1>{namee}</h1>
      <div id="mydiv">this is before the update</div>


      <p>=====================================================</p>
      <Api2/>

      <p>=====================================================</p>
      <div className="App"> 
      <Search/>
      </div>
        </div>
    );
}
}

export default Api;