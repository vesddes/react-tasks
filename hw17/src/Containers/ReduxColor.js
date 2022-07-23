import React from 'react';
import { connect } from 'react-redux';

import { green, red, blue } from '../actions/buttons';
import { Button } from "../components/Button";

class Color extends React.Component {
  render() {
    console.log('this.props', this.props);
    return (
      <div>
        <Button text="Green" handleClick={this.props.green} style={this.props.color ||'green' }/>
        <Button text="Blue" handleClick={this.props.blue} style={ this.props.color ||'blue' }/>
        <Button text="Red" handleClick={this.props.red} style={this.props.color ||'red' }/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      color: state.color
  };
};

const mapDispatchToProps = {
    red, blue, green
};


export const ReduxColor = connect(mapStateToProps, mapDispatchToProps)(Color);
