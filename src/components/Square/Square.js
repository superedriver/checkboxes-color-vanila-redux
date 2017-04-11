import React, { PropTypes as toBe, Component } from 'react';
import './Square.css';

class Square extends Component {
  static propTypes = {
    color: toBe.string.isRequired,
  };

  render() {
    const divColor = {
      backgroundColor: this.props.color
    };

    return (
      <div className='Square' style={divColor} />
    );
  }
}

export default Square;
