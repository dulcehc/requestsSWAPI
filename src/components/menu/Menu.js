import React, { Component } from 'react';
import ListItem from './ListItem';

const Menu = ({data, onSelected}) => {
  const handleCharacter = character => {
    console.log('sth');
    onSelected(character);
  }

  return (
    <div className='Menu'>
      {
        data.map(character => (
          <ListItem
            character={character.name}
            data={data}
            key={character.name}
            onClickedItem={()=>handleCharacter(character.name)}
          />
        ))
      }
    </div>
  );

}

export default Menu;