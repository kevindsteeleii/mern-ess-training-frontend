import React from 'react';

const PlayerList = (props) => {
  const { players, updateCurrentPlayer } = props;
  return(
    <div>
      <ul className="collection with-header">
        <li className="collection-header"><h4>Players</h4></li>
        {players.map((item) => (
          <a key={item._id} href="#!" 
            className="collection-item"
            onClick={updateCurrentPlayer.bind(this, item)}
          >{item.first_name} {item.last_name}</a>

        ))}
      </ul>
    </div>
  );
}

export default PlayerList;