import React, { Component } from 'react';

class BandInput extends Component {

  constructor(props){
    super (props);

    this.state = {
      text: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text,
    });
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          <input
            type = "text"
            placeholder = "band name"
            onChange = {this.handleChange}
            value = {this.state.text}
            />
          <input type = "submit" />
        </form>
        {this.state.text}
      </div>
    );
  }
};

export default BandInput;
