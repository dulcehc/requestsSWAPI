import React, { Component } from 'react';

import getImage from '../services/getImage';

class Detail extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { character } = this.props;
    return (
      <div className="Detail">
        <h1 className="Detail__title">{character}</h1>
        <div className="Detail__picture">
          <img src={getImage(character)} />
        </div>
        <div className="Detail__information" />
      </div>
    );
  }
}

export default Detail;
