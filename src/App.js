import React, {Component} from 'react';
import './App.css';
import CardList from './components/card-list/CardList';

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
        <CardList monsters={this.state.monsters}></CardList>
        <p>{this.state.string}</p>
        <button onClick={this.handleClick}>Change name</button>
      </div>
    );
  }
}
