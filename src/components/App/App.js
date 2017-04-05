import React, { PropTypes as toBe, Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import Square from '../Square/Square';

class App extends Component {
  static propTypes = {
    store: toBe.object,
  };

  render() {
    const { store } = this.props;

    return (
      <div className="App">
        <Form store={store} />
        <Square store={store} />
      </div>
    );
  }
}

export default App;
