import React, { Component } from 'react';
import Menu from './menu/Menu';
import Detail from './Detail';

class App extends Component {
  constructor() {
    super();
    this.state = {
      character: null,
      data: []
    }

  }
  componentDidMount() {
    // get all characters
    const url = 'https://swapi.co/api/people/';

    fetch(url)
      .then(data => data.json())
      .then(persons => {
        this.setState({
          data: persons.results
        })
      })
  }

  handleSelectionCharacter = character => {
    console.log('character:', character);
    this.setState({
      character
    });
  }
  render() {
    const { character, data } = this.state;
    console.log('character render-app: ', character);
    return (
      <div className='App'>
        <div className='App__title'>Star Wars</div>
        { data.length > 0 ?
          <Menu
            data={data}
            onSelected={this.handleSelectionCharacter}
          />
          : 'loading'
        }
        { character && <Detail character={character} /> }

      </div>
    );
  }
}

export default App;