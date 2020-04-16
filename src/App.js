import React, {Component} from 'react';
import './App.css';
import CardList from './components/card-list/CardList';
import SearchBox from './components/searchbox/SearchBox';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      myString: 'Hello Anonymous....',
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
    const {monsters, searchField, myString} = this.state;
    // filters monsters in search box
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
        <p>{myString}</p>
        <button onClick={this.handleClick}>Change name</button>
      </div>
    );
  }
}
