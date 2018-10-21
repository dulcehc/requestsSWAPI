import React, { Component } from 'react';

class Detail extends Component {
  constructor(props) {
    super();
    this.state = {
      character: props.character

    }

  }

  render() {
    return (
      <div className='Detail'>
        {this.props.character}
      </div>
    );
  }
}

export default Detail;