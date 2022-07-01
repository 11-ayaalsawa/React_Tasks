import React from "react";
class Api2 extends React.Component {

  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
      namee: 'dyar'
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {

            fetch("https://jsonplaceholder.typicode.com/users")
                .then((res) => res.json())
                .then((json) => {
                    this.setState({
                        items: json,
                        DataisLoaded: true
                    });
                })

    setTimeout(() => {
      this.setState({ namee: "bahaa" })
    }, 3000)


  }


  componentDidUpdate() {
    setTimeout(() => {
      document.getElementById("mydiv").innerHTML =
        "Hello World ";
    }, 2000);

  }
  render() {
    // const { namee } = this.state;
    const {items, DataisLoaded,namee } = this.state;

    if (!DataisLoaded) return <div>
        <h1> Pleses wait some time.... </h1> </div> ;

    return (
      <div className="App">
        <h1> Fetch data from an api in react </h1> {
                items.map((item) => (
                <ul key = { item.id } >
                    <li>User_Name: { item.username }</li>
                    <li>Full_Name: { item.name }</li>
                    <li>User_Email: { item.email }</li>
                    </ul>
                ))
            }
        {/* <h1>{namee}</h1>
        <div id="mydiv">this is before the update</div> */}
      </div>
    );
  }
}

export default Api2;