import React, { PropTypes as toBe, Component } from 'react';
import './Form.css';
import RadioButton from '../RadioButton/RadioButton';

class Form extends Component {
  static propTypes = {
    colors: toBe.array.isRequired,
    onClick: toBe.func.isRequired,
  };

  render() {
    const { colors, onClick } = this.props;
    return (
      <form className='Form'>
        { colors.map( color => (
          <RadioButton
            key={color}
            name='changeColor'
            color={color}
            onClick={onClick(color)}
          />)
        )}
      </form>
    );
  }
}

export default Form;
