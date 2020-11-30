//import logo from './logo.svg';
import './App.css';
//import { render } from 'react-dom';
import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import Signup from "./components/Signup"


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  /* we're displaying the array(list) as elements on the webpage by creating a state and mapping it
  the fetch function gets a list(array) from the api of the link passed to it, the .then creates a response
  function that stores the data in a readable json file. the second .then now changes the state of the monsters
  array already created (empty) withe the this.setstate function
  */
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()));


    return (
    <div className="App">
      <input
      type = 'search'
      placeholder = 'search monsters'
      onChange={e => this.setState({ searchField: e.target.value })} 
    />
    <CardList monsters = {filteredMonsters} />


      
    </div>
    );


    
  }
}



export default App;
