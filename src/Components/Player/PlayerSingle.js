import React from 'react';

const PlayerSingle = (props) => {
 
  

  return(<div className="row">
    <div className="col s12 m7">

      { !props.player 
      ? <h1>No player choosen yet</h1>
      :
        <div className="card">
        <div className="card-image">
          <img src="soccer.jpg" 
          alt="soccer shoes on field with a ball"
          data-photo-accredited-unsplash-com-link="@alexlanting"/>

          <span className="card-title">{props.player.first_name} {props.player.last_name}</span>
        </div>
        <div className="card-content">
          <p>Phone: {!!props.player.phone ? props.player.phone : "xxx - xxxx"} - Email: {props.player.email}</p>
          <p>Strength: {!!props.player.strength ? props.player.strength : "Unknown"} - Endurance: {props.player.endurance}</p>
        </div>
        <div className="card-action">
          Team: {!!props.player.team ? props.player.team : "Unsigned - Free Agent"}
        </div>
      </div>}

    </div>
  </div>);
}

export default PlayerSingle;