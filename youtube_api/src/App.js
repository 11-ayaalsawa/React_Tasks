
import React, { Component } from 'react';


import Search from './Components/Search'
import './App.css';

class App extends Component {

  state = {
    videoMetaInfo:[],
    selectedVideoId:null
  }

  onSearch  = async keyword =>{
    const response = await youtubeApi.get ("/search").{
      params:{
        q:keyword
      }
    }

  }

  render() { 
    return (
      <div className="App"> 
      <Search onSearch={this.onSearch}/>
      </div>
    );
  }
}
 


export default App;
