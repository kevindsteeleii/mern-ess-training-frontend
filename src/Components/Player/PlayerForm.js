import React from 'react';
import axios from "axios";

class PlayerForm extends React.Component {

  submitPlayer (event) {
    event.preventDefault();

    axios.post('http://localhost:4000/players', {
      first_name: this.refs.first_name.value,
      last_name: this.refs.last_name.value,
      phone: this.refs.phone.value,
      email: this.refs.email.value
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error);
    });

    this.refs.first_name.value = "";
    this.refs.last_name.value = "";
    this.refs.phone.value = "";
    this.refs.email.value = "";
  }

  render() { 
    return (
      <div className="row">
        <h1 className="center">Add a New Player</h1>
        <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>

          <div className="row">
            <div className="input-field col s6">
              <input  id="first_name" ref="first_name" type="text"/>
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" ref="last_name" type="text"/>
              <label htmlFor="last_name">Last Name</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input  id="phone" ref="phone" type="text"/>
              <label htmlFor="phone">Phone Number</label>
            </div>
            <div className="input-field col s6">
              <input id="email" ref="email" type="text"/>
              <label htmlFor="email">Email</label>
            </div>
          </div>
          
          <button className="btn waves-effect-waves light" type="submit"
          name="action">Add player</button>
        </form>
      </div>);
  }
}
 
export default PlayerForm;