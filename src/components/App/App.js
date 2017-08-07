import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import Square from '../Square/Square';
import Circle from '../Circle/Circle';
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

    this.onSquareFormChange = this.onFormChange.bind(this, 'squareColor');
    this.onCircleFormChange = this.onFormChange.bind(this, 'circleColor');
  }

  getPreviousColor(field) {
    return store.getState()[field];
  }

  onFormChange(field, color) {
    return () => {
      const previousColor = this.getPreviousColor(field);

      if (previousColor !== color) {
        const actions = {
          'squareColor': changeSquareColor,
          'circleColor': changeCircleColor,
        };

        store.dispatch(actions[field](color));
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
            onChange={this.onSquareFormChange}
          />
          <Square color={squareColor}/>
        </div>
        <div>
          <Form
            onChange={this.onCircleFormChange}
          />
          <Circle color={circleColor} />
        </div>
      </div>
    );
  }
}

export default App;
