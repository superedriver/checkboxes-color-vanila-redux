import React, { PropTypes as toBe, Component } from 'react';
import './Circle.css';

class Circle extends Component {
  static propTypes = {
    color: toBe.string.isRequired,
  };

  render() {
    const divColor = {
      backgroundColor: this.props.color
    };

    return (
      <div className='Circle' style={divColor} />
    );
  }
}

export default Circle;
