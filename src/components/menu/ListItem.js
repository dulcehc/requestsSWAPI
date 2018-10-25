import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {
  constructor(props) {
    super();
    this.state = {
      character: props.character
    }

  }

  render() {
    const { character } = this.state;
    const { onClickedItem } = this.props;
    return (
      <div className='ListItem' onClick={onClickedItem}>
        {character}
      </div>
    );
  }
}

ListItem.propTypes = {
  character: PropTypes.string.isRequired,
  onClickedItem: PropTypes.func,
};


export default ListItem;