import React, { Component } from 'react';
import Information from './Information';

import getImage from '../../services/getImage';

class Detail extends Component {
  constructor(props) {
    super();
    this.state = {
      films: null,
      home: null,
      specie: null
    }
  }

  componentDidMount() {
    this.getFilms(this.props.info.films);
    this.getHome(this.props.info.homeworld);
    this.getSpecie(this.props.info.species[0]);
  }

   componentWillReceiveProps(nextProps) {
    if (nextProps.character !== this.props.character) {
      this.setState({ films: null, home: null});
      this.getFilms(nextProps.info.films);
      this.getHome(nextProps.info.homeworld);
      this.getSpecie(nextProps.info.species[0]);
    }
  }

  getHome(urlHome) {
    fetch(urlHome)
      .then(data => data.json())
      .then(res => {
        this.setState({ home: res.name})
      })
  }
  getFilms(films) {
    const newFilms = []

    films.map(film => {
      fetch(film)
        .then(data => data.json())
        .then(res => {
          newFilms.push({
            title: res.title,
            id: res.episode_id
          });
          this.setState({
            films: newFilms
          });
        })
    })
  }

  getSpecie(specieURL) {
    fetch(specieURL)
      .then(data => data.json())
      .then(res => {
        this.setState({
          specie: res.name
        })
      })
  }

  render() {
    const { character, info } = this.props;
    const { films, home, specie } = this.state;

    return (
      <div className="Detail">
        <h1 className="Detail__title">{character}</h1>

        <div className="Detail__information">
          <div className="Detail__picture">
            <img src={getImage(character)} />
          </div>
          <Information
            gender={info.gender}
            home={home}
            specie={specie}
            films={films}
          />
        </div>
      </div>
    );
  }
}

export default Detail;
