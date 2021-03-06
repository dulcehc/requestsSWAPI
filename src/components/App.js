import React, { Component } from 'react';
import Menu from './menu/Menu';
import Detail from './detail/Detail';

class App extends Component {
  constructor() {
    super();
    this.state = {
      character: null,
      data: [],
    };
  }

  componentDidMount() {
    // get all characters
    const url = 'https://swapi.co/api/people/';

    fetch(url)
      .then(data => data.json())
      .then(persons => {
        this.setState({
          data: persons.results,
        });
      });
  }

  handleSelectionCharacter = character => {
    this.setState({
      character,
    });
  };

  information = character => {
    return this.state.data.filter(person => person.name === character)[0];
  };

  render() {
    const { character, data } = this.state;
    return (
      <div className="App">
        <div className="App__title">
          <img src="img/star_wars.png" />
        </div>
        <div className="container">
          {data.length > 0 ? (
            <Menu data={data} onSelected={this.handleSelectionCharacter} />
          ) : (
            'loading'
          )}
          {character && <Detail character={character} info={this.information(character)} />}
        </div>
      </div>
    );
  }
}

export default App;
