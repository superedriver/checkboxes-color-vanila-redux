import React, { PropTypes as toBe, Component } from 'react';
import './Form.css';
import RadioButton from '../RadioButton/RadioButton';
import { changeColor } from '../../actions'


class Form extends Component {
  static propTypes = {
    store: toBe.object,
  };

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(color) {
    const { store } = this.props;

    return () => {
      const previousColor = store.getState().color;

      if (previousColor !== color) {
        store.dispatch(changeColor(color));
      }
    }
  }

  render() {
    const redColor = 'red';
    const greenColor = 'green';
    const blueColor = 'blue';
    const groupName = 'colorSquare';

    return (
      <form className='Form'>
        <RadioButton name={groupName} color={redColor} onClick={this.onClick(redColor)}/>
        <RadioButton name={groupName} color={greenColor} onClick={this.onClick(greenColor)}/>
        <RadioButton name={groupName} color={blueColor} onClick={this.onClick(blueColor)}/>
      </form>
    );
  }
}

export default Form;

