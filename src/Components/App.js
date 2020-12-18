import React from 'react';
import axios from "axios";
import PlayerList from "./Player/PlayerList";
import PlayerForm from "./Player/PlayerForm";
import PlayerSingle from "./Player/PlayerSingle";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      players: [],
      currentPlayer: null
    };

    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
  }

  updateCurrentPlayer(item) {
    this.setState({
      currentPlayer: item
    });
  }

  componentDidMount() {
    const url = 'http://localhost:4000/players/';
    // axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

    axios.get(url)
      .then((response) => {
        this.setState({
          players: response.data
        })
      })
      .catch(err => console.err)
  }

  render() {
    const { players, currentPlayer } = this.state;

    return (<div className="container-fluid">
      <div className="row">
        <nav>
          <div className="nav-wrapper teal darken-3">
            <a href="/" className="brand-logo">Logo</a>
          </div>
        </nav>
      </div>
      <div className="row">
        <div className="col s3"><PlayerList players={players} updateCurrentPlayer={this.updateCurrentPlayer}/></div>
        <div className="col s9"><PlayerSingle player={currentPlayer}/></div>
      </div>
      <div className="row">
        <div className="col s12">
        <PlayerForm/>
        </div>
      </div>
    </div>);
  }
}

export default App;
