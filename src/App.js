import React, {Component} from 'react';
import './App.css';
import CardList from './components/card-list/CardList';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      string: 'Hello Anonymous....',
      searchField: '',
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

  handleChange = (e) => {
    e.preventDefault();
    this.setState(
      {
        searchField: e.target.value,
      },
      () => console.log(this.state)
    );
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
        <input
          type="search"
          placeholder="search monsters"
          onChange={this.handleChange}
        />
        <CardList monsters={this.state.monsters}></CardList>
        <p>{this.state.string}</p>
        <button onClick={this.handleClick}>Change name</button>
      </div>
    );
  }
}
