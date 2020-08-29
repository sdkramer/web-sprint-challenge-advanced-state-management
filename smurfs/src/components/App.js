import React, { Component } from "react";
import SmurfList from './SmurfList';
import InputForm from './InputForm';
import "./App.css";


class App extends Component {
  render() {
    return (
      <div className='ui container' style={{marginTop: '50px', color: 'rgb(55, 130, 242)'}}>
      <h1 className="ui center aligned icon header" style={{color: ' rgb(1, 143, 131)'}}>
  <i className="map signs icon" style={{color: 'light purple'}}></i>
 Smurf Village
</h1>
<SmurfList />
<InputForm />
      </div>
    );
  }
}

export default App;
