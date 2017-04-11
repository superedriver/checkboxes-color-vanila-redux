import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import Square from '../Square/Square';
import Circle from '../Circle/Circle';
import { COLORS } from '../../constants';
import { changeSquareColor, changeCircleColor } from '../../actions'
import store from '../../store'

class App extends Component {
  constructor(props) {
    super(props);

    const state = store.getState();
    this.state = {
      squareColor: state.squareColor,
      circleColor: state.squareColor
    };

    this.onSquareFormChange = this.onSquareFormChange.bind(this);
    this.onCircleFormChange = this.onCircleFormChange.bind(this);
  }

  getPreviousColor(field) {
    return store.getState()[field];
  }

  onSquareFormChange(color) {
    return () => {
      const previousColor = this.getPreviousColor('squareColor');

      if (previousColor !== color) {
        store.dispatch(changeSquareColor(color));
      }
    }
  }

  onCircleFormChange(color) {
    return () => {
      const previousColor = this.getPreviousColor('circleColor');

      if (previousColor !== color) {
        store.dispatch(changeCircleColor(color));
      }
    }
  }

  componentWillMount() {
    this.unsubscribe = store.subscribe( () => {
      this.setState({
        squareColor: store.getState().squareColor,
        circleColor: store.getState().circleColor,
      })
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { squareColor, circleColor } = this.state;
    return (
      <div className="App">
        <div>
          <Form
            colors={COLORS}
            onClick={this.onSquareFormChange}
          />
          <Square color={squareColor}/>
        </div>
        <div>
          <Form
            colors={COLORS}
            onClick={this.onCircleFormChange}
          />
          <Circle color={circleColor} />
        </div>
      </div>
    );
  }
}

export default App;
