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
    return (
      <form className='Form'>
        <RadioButton name='colorSquare' color='red' onClick={this.onClick('red')}/>
        <RadioButton name='colorSquare' color='green' onClick={this.onClick('green')}/>
        <RadioButton name='colorSquare' color='blue' onClick={this.onClick('blue')}/>
      </form>
    );
  }
}

export default Form;

