import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      string: 'Hello Anonymous....',
    };
  }
  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState({monsters: users});
      });
  };

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      string: 'Hello Leo!',
    });
  };
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((eachMonster) => (
          <h1 key={eachMonster.id}>{eachMonster.name}</h1>
        ))}
        <p>{this.state.string}</p>
        <button onClick={this.handleClick}>Change name</button>
      </div>
    );
  }
}
