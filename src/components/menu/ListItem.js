import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props) {
    super();
    this.state = {
      character: props.character
    }

  }

  render() {
    const { character } = this.state;
    const {onClickedItem} = this.props;
    return (
      <div className='ListItem' onClick={onClickedItem}>
        {character}
      </div>
    );
  }
}

export default ListItem;