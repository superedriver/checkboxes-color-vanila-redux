import React, { Component } from 'react';
import './RadioButton.css';

class RadioButton extends Component {
  render() {
    const { name, color, onClick } = this.props;

    return (
      <div className="RadioButton">
        <label>
          <input
            type="radio"
            name={name}
            onClick={onClick}
          />
            {color}
        </label>
      </div>
    )
  }
}

export default RadioButton;
